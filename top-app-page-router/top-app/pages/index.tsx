import { Button, Htag, P, Rating } from '@/components';
import { Tag } from '@/components/Tag/Tag';
import { Noto_Sans_KR } from 'next/font/google';
import { useEffect, useState } from 'react';

const notoSans = Noto_Sans_KR({ subsets: ['cyrillic'] });
export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    console.log(`Counter: ${counter}`);
    return function cleanUp() {
      console.log('UnMount');
    }
  }, [counter])
  return (
    <main className={`${notoSans.className}`}>
      <Htag tag='h1'>Заголовок 1</Htag>
      <Htag tag='h2'>Заголовок 2</Htag>
      <Htag tag='h3'>Заголовок 3</Htag>
      <Button appearence='primary' onClick={() => setCounter(count => count + 1)} arrow='right'>Primary</Button>
      <Button appearence='ghost' arrow='right'>Ghost</Button>
      <P>Без размера</P>
      <P size={'sm'}>Маленьктй текст</P>
      <P size={'m'}>Средний текст</P>
      <P size={'lg'}>Большой текст</P>
      <Tag size='sm' color='ghost' >Ghost</Tag>
      <Tag size='sm' color='red' >Red</Tag>
      <Tag size='lg' color='gray' >{counter}</Tag>
      <Tag size='sm' color='green' >Green</Tag>
      <Tag size='sm' color='primary' href='/about'>Primary</Tag>
      <Rating rating={counter} isEditable={true} setRating={setCounter}/>
    </main>
  );
}
