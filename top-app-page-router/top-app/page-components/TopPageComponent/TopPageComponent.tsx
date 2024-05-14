import { TopPageComponentProps } from "./TopPageComponent.props";
import cn from 'classnames';
import styles from './TopPageComponent.module.css';
import { Cadr, HHData, Htag } from "@/components";
import { Tag } from "@/components/Tag/Tag";
import { TopLevelCategory } from "@/interfaces/toppage.interface";

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page?.title}</Htag>
                {products && <Tag color="gray" size="lg" >{products.length}</Tag>}
                <span>SORTING</span>
            </div>
            {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page?.category}</Htag>
                <Tag color="red" size="lg" >hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && <HHData {...page?.hh} />}
        </div>
    );
}