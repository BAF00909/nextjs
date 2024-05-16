import { firstLevelMenu } from "@/helpers/helpers";
import { MenuItem } from "@/interfaces/menu.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { TopPageModel, TopLevelCategory } from "@/interfaces/toppage.interface";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

function SearchPage(): JSX.Element {
    return (
        <>Search</>
    );
}

export default withLayout(SearchPage);

export const getStaticProps: GetStaticProps<SearchProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
}

interface SearchProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: TopLevelCategory,
}