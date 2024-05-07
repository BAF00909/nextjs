import { PProps } from "./P.props";
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({ size, children, className, ...rest }: PProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.sm]: size == 'sm',
                [styles.m]: size == 'm',
                [styles.lg]: size == 'lg',
            })}
        >
            {children}
        </p>
    );
}