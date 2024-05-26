import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import upIcon from './icons/arrowUp.svg';
import closeIcon from './icons/closeIcon.svg';
import menuIcon from './icons/menuIcon.svg';

export const icons = {
    upIcon,
    closeIcon,
    menuIcon,
}

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearence: 'primary' | 'white';
}