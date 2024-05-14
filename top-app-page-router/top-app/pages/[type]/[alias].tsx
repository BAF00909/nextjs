import { MenuItem } from "@/interfaces/menu.interface";
import { withLayout } from "@/layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from 'axios';
import { TopLevelCategory, TopPageModel } from "@/interfaces/toppage.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.interface";
import { firstLevelMenu } from "@/helpers/helpers";
import { TopPageComponent } from "@/page-components/TopPageComponent/TopPageComponent";

function TopPage({ menu, page, products, firstCategory }: TopPageProps) {
    return <TopPageComponent firstCategory={firstCategory} page={page} products={products} />;
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory: m.id });
        paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    return {
        paths: paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        }
    }
    try {
        const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
        if (!firstCategoryItem) {
            return {
                notFound: true,
            }
        }
        const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory: firstCategoryItem?.id });
        if(!menu.length) {
            return {
                notFound: true
            };
        }
        const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
        const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', { category: page.category, limit: 10 });
        return {
            props: { menu, firstCategory: firstCategoryItem?.id, page, products }
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
}

interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: TopLevelCategory,
    page: TopPageModel,
    products: ProductModel[]
}