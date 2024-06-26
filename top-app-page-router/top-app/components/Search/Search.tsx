import { SearchProps } from "./Search.props";
import cn from 'classnames';
import styles from './Search.module.css';
import SearchIcon from './icons/search.svg';
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useRouter } from "next/router";

export const Search = ({ className, ...rest }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>();
    const router = useRouter();
    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        })
    };
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            goToSearch();
        }
    };
    return (
        <div className={cn(styles.search, className, {})} {...rest}>
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearence="primary"
                className={styles.button}
                onClick={goToSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
}