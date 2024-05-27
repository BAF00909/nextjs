import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './page.module.css';
import { Menu } from "./components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Top app рейтинг курсов",
    description: "рейтинг it курсов",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.nav}>
          <Menu />
        </nav>
        {children}
      </body>
    </html>
  );
}
