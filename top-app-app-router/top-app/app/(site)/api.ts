import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageModel } from "@/interfaces/toppage.interface";

export const API = {
  topPage: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/',
    productFind: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
  },
  review: {
    createDemo: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create-demo'
  }
}

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({
      firstCategory
    })
  })
  return res.json();
}

export async function getPage(alias: string): Promise<TopPageModel | null> {
  await new Promise((res) => setTimeout(() => { res('') }, 5000))
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 }
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}