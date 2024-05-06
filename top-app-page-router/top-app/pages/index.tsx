import { Htag } from '@/components';
import { Noto_Sans_KR } from 'next/font/google';

const notoSans = Noto_Sans_KR({ subsets: ['cyrillic'] });

export default function Home() {
  return (
    <main className={`${notoSans.className}`}>
      <Htag tag='h1'>Заголовок 1</Htag>
      <Htag tag='h2'>Заголовок 2</Htag>
      <Htag tag='h3'>Заголовок 3</Htag>
    </main>
  );
}
