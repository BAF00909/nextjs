import { SortEnum, SortProps } from "./Sort.props";
import cn from 'classnames';
import styles from './Sort.module.css';
import SortIcon from './icons/sort.svg';

export const Sort = ({ sort, setSort, className, ...rest }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className, {})}>
            <span
                className={cn({
                    [styles.active]: sort === SortEnum.Rating
                })}
                onClick={() => setSort(SortEnum.Rating)}
            >
                <SortIcon className={styles.sortIcon} />По рейтингу
            </span>
            <span
                className={cn({
                    [styles.active]: sort === SortEnum.Price
                })}
                onClick={() => setSort(SortEnum.Price)}
            >
                <SortIcon  className={styles.sortIcon} />По цене
            </span>
        </div>
    );
}