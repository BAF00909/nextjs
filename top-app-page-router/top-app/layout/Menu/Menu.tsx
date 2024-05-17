import cn from 'classnames';
import styles from './Menu.module.css';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '@/helpers/helpers';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();
    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0 }
    };
    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 38
        },
        hidden: { opacity: 0, height: 0 }
    };
    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    }
    const buildFirstLevel = (): JSX.Element => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.id} >
                        <Link href={`/${m.route}`} className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id === firstCategory
                        })}>
                            <div>{m.icon}</div>
                            <span>{m.name}</span>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    }
    const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
        return (
            <div className={styles.secondBlock}>
                {
                    menu && menu.map(m => {
                        if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                            m.isOpened = true;
                        }
                        return (
                            <div key={m._id.secondCategory}>
                                <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                                <motion.div
                                    layout
                                    variants={variants}
                                    initial={m.isOpened ? 'visible' : 'hidden'}
                                    animate={m.isOpened ? 'visible' : 'hidden'}
                                    className={cn(styles.secondLevelBlock)}>
                                    {buildThirdLevel(m.pages, menuItem.route)}
                                </motion.div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <motion.div
                    key={page._id}
                    variants={variantsChildren}
                >
                    <Link href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
                    })}>
                        {page.category}
                    </Link>
                </motion.div>
            ))
        );
    }
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
}