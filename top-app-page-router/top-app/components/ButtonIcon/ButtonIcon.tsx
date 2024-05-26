import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import cn from 'classnames';

export const ButtonIcon = ({ appearence, icon, className, ...rest }: ButtonIconProps): JSX.Element => {
    const IconComponent = icons[icon];
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearence == 'primary',
                [styles.white]: appearence == 'white',
            })}
            {...rest}
        >
            <IconComponent />
        </button>
    );
}