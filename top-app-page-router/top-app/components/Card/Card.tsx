import { CadrProps } from "./Card.props";
import cn from 'classnames';
import styles from './Card.module.css';
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(({ color, children, className, ...rest }: CadrProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div
            className={cn(className, styles.card, {
                [styles.blue]: color === 'blue'
            })}
            ref={ref}
            {...rest}
        >
            {children}
        </div>
    );
})

Card.displayName = 'Card';