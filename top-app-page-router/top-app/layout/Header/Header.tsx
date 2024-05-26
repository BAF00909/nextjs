import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from '../icons/logo.svg';
import { ButtonIcon } from "@/components";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setMenuIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opasity: 1,
            x: 0,
            transition: {
                stiffnes: 20
            }
        },
        closed: {
            opasity: 0,
            x: '100%'
        }
    }
    return (
        <header
            className={cn(styles.header, className)}
            {...props}
        >
            <Logo />
            <ButtonIcon appearence="white" icon="menuIcon" onClick={() => setMenuIsOpened(true)} />
            <motion.div
                variants={variants}
                initial={'closed'}
                animate={menuIsOpened ? 'opened' : 'closed'}
                className={styles.mobileMenu}
            >
                <Sidebar />
                <ButtonIcon className={styles.menuClose} appearence="white" icon="closeIcon" onClick={() => setMenuIsOpened(false)} />
            </motion.div>
        </header>
    );
}
