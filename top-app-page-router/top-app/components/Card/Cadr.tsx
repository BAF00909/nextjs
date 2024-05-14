import { CadrProps } from "./Cadr.props";
import cn from 'classnames';
import styles from './Cadr.module.css';

export const Cadr = ({ color, children, className, ...rest }: CadrProps): JSX.Element => {
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