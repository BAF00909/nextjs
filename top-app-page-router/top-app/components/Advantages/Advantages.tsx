import { AdvantagesProps } from "./Advantages.props";
import cn from 'classnames';
import styles from './Advantages.module.css';
import CheckIcon from './icons/check.svg';

export const Advantages = ({ adventages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {adventages.map(a => {
                return (
                    <div key={a._id} className={styles.advantage}>
                        <CheckIcon />
                        <div className={styles.title}>{a.title}</div>
                        <div className={styles.vlineWrapper}><hr className={styles.vline} /></div>
                        <div className={styles.description}>{a.description}</div>
                    </div>
                );
            })}
        </>
    );
}