import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import LogoIcon from '../icons/logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import {Search} from '../../components/index';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <LogoIcon className={styles.logo} />
            <Search />
            <Menu />
        </div>
    );
}
