'use client';
import { ButtonProps } from "./Button.props";

export const Button = ({ children }: ButtonProps): JSX.Element => {
    return (
        <button onClick={() => alert('Hello')}>{children}</button>
    );
}