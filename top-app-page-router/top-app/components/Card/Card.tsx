import { CadrProps } from "./Card.props";
import cn from 'classnames';
import styles from './Card.module.css';

export const Card = ({ color, children, className, ...rest }: CadrProps): JSX.Element => {
    return (
        <div
            className={cn(className, styles.card, {
                [styles.blue]: color === 'blue'
            })}
            {...rest}
        >
            {children}
        </div>
    );
}