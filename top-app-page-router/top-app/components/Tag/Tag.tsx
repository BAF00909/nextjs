import { TagProps } from "./Tag.props";
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ color = 'ghost', children, size = 'sm', href, className, ...rest }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.sm]: size == 'sm',
                [styles.lg]: size == 'lg',
                [styles.ghost]: color == 'ghost',
                [styles.gray]: color == 'gray',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',
                [styles.red]: color == 'red',
            })}
            {...rest}
        >
            {href ? <a href={href}>{children}</a> : children}
        </div>
    );
}