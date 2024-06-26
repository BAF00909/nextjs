import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CadrProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    color?: 'white' | 'blue';
}