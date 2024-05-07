import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowImage from './arrow.svg';

export const Button = ({ appearence, children, className, arrow = 'none', ...rest }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearence == 'primary',
                [styles.ghost]: appearence == 'ghost',
            })}
            {...rest}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowImage />
            </span>}
        </button>
    );
}