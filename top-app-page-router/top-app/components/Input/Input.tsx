import { InputProps } from "./Input.props";
import cn from 'classnames';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef(({ className, error, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input
                className={cn(styles.input, {
                    [styles.error]: error
                })}
                ref={ref}
                {...rest}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

Input.displayName = 'Input';
