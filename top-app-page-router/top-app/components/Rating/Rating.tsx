import { ForwardedRef, KeyboardEvent, forwardRef, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import StarImage from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = forwardRef(({ rating, setRating, isEditable = false, className, error, ...rest }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [raingArray, setRaringArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const constructRating = (curRating: number): void => {
        const updatedArray = raingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < curRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarImage

                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(e, i + 1)}
                    />
                </span>
            );
        })
        setRaringArray(updatedArray);
    }
    useEffect(() => {
        constructRating(rating);
    }, [rating])
    const changeDisplay = (i: number): void => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    }
    const onClick = (i: number): void => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }
    const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }
    return (
        <div
            className={cn(styles.ratingWrapper, {
                [styles.starsError]: error,
            })}
            ref={ref}
            {...rest}
        >
            {raingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
            {error && <span className={styles.error}>{error.message}</span>}
        </div>
    );
});

Rating.displayName = 'Rating';