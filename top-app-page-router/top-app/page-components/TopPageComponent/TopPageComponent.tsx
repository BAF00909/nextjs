import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { Advantages, Tag, HHData, Htag, Sort, Product } from "@/components";
import { TopLevelCategory } from "@/interfaces/toppage.interface";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
    const [state, dispatch] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispatch({ type: sort });
    }
    useEffect(() => {
        dispatch({ type: 'Reset', payload: products });
    }, [products])
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page?.title}</Htag>
                {products && <Tag color="gray" size="lg" >{products.length}</Tag>}
                <Sort sort={state.sort} setSort={setSort} />
            </div>

            {state.products && state.products.map(p => (<Product key={p._id} product={p} />))}

            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page?.category}</Htag>
                <Tag color="red" size="lg" >hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page?.hh && <HHData {...page?.hh} />}
            {
                page?.advantages && page?.advantages?.length > 0 &&
                <>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages adventages={page.advantages} />
                </>
            }
            {
                page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page?.seoText }} />
            }
            <Htag tag='h2'>Получаемые навыки</Htag>
            {
                page?.tags?.map(t => <Tag color='primary' key={t}>{t}</Tag>)
            }
        </div>
    );
}