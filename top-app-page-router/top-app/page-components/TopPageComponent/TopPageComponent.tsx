import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { Advantages, Tag, HHData, Htag, P } from "@/components";
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
            {firstCategory === TopLevelCategory.Courses && page.hh && <HHData {...page.hh} />}
            {
                page?.advantages && page?.advantages?.length > 0 &&
                <>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages adventages={page.advantages} />
                </>
            }
            {
                page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page?.seoText}} />
            }
            <Htag tag='h2'>Получаемые навыки</Htag>
            {
                page?.tags?.map(t => <Tag color='primary' key={t}>{t}</Tag>)
            }
        </div>
    );
}