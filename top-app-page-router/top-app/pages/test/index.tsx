import styles from './style.module.css';

export default function TestPage(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Header</div>
            <div className={styles.main}>Main</div>
            <div className={styles.sidebar}>Sidebar</div>
            <div className={styles.footer}>Footer</div>
        </div>
        // <div className={styles.wrapper}>
        //     <div className={styles.c1}>1</div>
        //     <div className={styles.c2}>2</div>
        //     <div className={styles.c3}>3</div>
        //     <div className={styles.c4}>4</div>
        //     <div className={styles.c5}>5</div>
        //     <div className={styles.c6}>6</div>
        //     <div className={styles.c7}>7</div>
        //     <div className={styles.c8}>8</div>
        //     <div className={styles.c9}>9</div>
        // </div>
    );
}
