import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import {Hhdata} from '../../interfaces/toppage.interface';

export interface HHDataProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Hhdata {
    children?: ReactNode;
}