import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import LogoIcon from '../icons/logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <LogoIcon className={styles.logo} />
            <div>search</div>
            <Menu />
        </div>
    );
}
