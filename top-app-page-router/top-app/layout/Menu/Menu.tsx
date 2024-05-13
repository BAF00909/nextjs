import cn from 'classnames';
import styles from './Menu.module.css';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ServicesIcon from './icons/services.svg';
import Products from './icons/products.svg';
import { TopLevelCategory } from '@/interfaces/toppage.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <Products />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();
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
                    menu.map(m => {
                        if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                            m.isOpened = true;
                        }
                        return (
                            <div key={m._id.secondCategory}>
                                <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                                <div className={cn(styles.secondLevelBlock, {
                                    [styles.secondLevelBlockOpened]: m.isOpened
                                })}>
                                    {buildThirdLevel(m.pages, menuItem.route)}
                                </div>
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
                <Link key={page._id} href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
                })}>
                    {page.category}
                </Link>
            ))
        );
    }
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
}