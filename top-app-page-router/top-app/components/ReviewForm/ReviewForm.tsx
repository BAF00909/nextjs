import { ReviewFormProps } from "./ReviewForm.props";
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { useState } from "react";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import CloseIcon from './icons/close.svg';

export const ReviewForm = ({ productId, className, ...rest }: ReviewFormProps): JSX.Element => {
    const [rating, setRating] = useState<number>(0);
    const onSetRating = (newRating: number) => {
        setRating(newRating);
    }
    return (
        <>
            <div
                className={cn(styles.reviewForm, className, {})}
                {...rest}
            >
                <Input placeholder="Имя" />
                <Input className={styles.title} placeholder="Заголовок отзыва" />
                <div className={styles.rating}>
                    <span>Оценка: </span>
                    <Rating rating={rating} setRating={onSetRating} isEditable={true} />
                </div>
                <TextArea className={styles.description} placeholder="Текст отзыва" />
                <div className={styles.submit}>
                    <Button appearence='primary'>Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>
                    Спасибо, ваш отзыв будет опубликован после проверки
                </div>
                <CloseIcon className={styles.close}/>
            </div>
        </>
    );
}