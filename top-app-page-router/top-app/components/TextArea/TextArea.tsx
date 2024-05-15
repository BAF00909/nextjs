import { TextAreaProps } from "./TextArea.props";
import cn from 'classnames';
import styles from './TextArea.module.css';

export const TextArea = ({ className, ...rest }: TextAreaProps): JSX.Element => {
    return (
        <textarea
            className={cn(styles.textArea, className, {})}
            {...rest}
        />
    );
}