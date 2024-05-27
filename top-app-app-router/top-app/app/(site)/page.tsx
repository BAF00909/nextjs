import { Metadata } from "next";
import styles from "./page.module.css";
import { Button } from "../../components/Button/Button";


export const metadata: Metadata = {
  title: "Top app главная",
  description: "рейтинг it курсов",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>Click</Button>
    </main>
  );
}
