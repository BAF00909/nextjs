import { HHDataProps } from "./HHData.props";
import cn from 'classnames';
import styles from './HHData.module.css';
import { Card } from '../index';
import RateIcon from './icons/rate.svg';
import { priceRu } from "@/helpers/helpers";

export const HHData = ({ children, className, count, juniorSalary, middleSalary, seniorSalary }: HHDataProps): JSX.Element => {
    return (
        <div className={cn(className, styles.hh)} >
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                    </div>
                </div>
            </Card>
            {children}
        </div >
    );
}