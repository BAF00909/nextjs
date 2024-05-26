import { UpProps } from "./Up.props";
import cn from 'classnames';
import styles from './Up.module.css';
import ArrorUpIcon from './icons/arrowUp.svg';
import { useScrollY } from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = ({ className, ...rest }: UpProps): JSX.Element => {
    const control = useAnimation();
    const y = useScrollY();
    useEffect(() => {
        control.start({opacity: y / document.body.scrollHeight})
    }, [y, control])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    return (
        <motion.div
            className={cn(styles.up, className, {})}
            animate={control}
            initial={{opacity: 0}}
        >
            <ButtonIcon appearence="white" icon='upIcon' onClick={scrollToTop}/>
        </motion.div>
    );
}