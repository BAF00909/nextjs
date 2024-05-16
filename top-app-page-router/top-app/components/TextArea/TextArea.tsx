import { TextAreaProps } from "./TextArea.props";
import cn from 'classnames';
import styles from './TextArea.module.css';
import { ForwardedRef, forwardRef } from "react";

export const TextArea = forwardRef(({ className, error, ...rest }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textAreaWrapper, className)}>
            <textarea
                className={cn(styles.textArea, {
                    [styles.error]: error
                })}
                ref={ref}
                {...rest}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

TextArea.displayName = 'TextArea';