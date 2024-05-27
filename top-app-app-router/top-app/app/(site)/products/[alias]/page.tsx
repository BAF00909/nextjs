import { Metadata } from "next";
import { getMenu, getPage } from "../../api";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Продукты'
    };
}

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })))
}

export default async function Products({ params }: { params: { alias: string } }) {
    const page = await getPage(params.alias);
    if (!page) {
        notFound();
    }
    return (
        <>{page.title}</>
    );
}