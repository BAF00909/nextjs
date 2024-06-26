import { DividerProps } from "./Divider.props";
import cn from 'classnames';
import styles from './Divider.module.css';

export const Divider = ({ className, ...rest }: DividerProps): JSX.Element => {
    return (
       <hr className={cn(styles.hr, className, {})} {...rest}/>
    );
}