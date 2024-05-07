import { KeyboardEvent, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import StarImage from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = ({ rating, setRating, isEditable = false, className, ...rest }: RatingProps): JSX.Element => {
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
            {...rest}
        >
            {raingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
        </div>
    );
}