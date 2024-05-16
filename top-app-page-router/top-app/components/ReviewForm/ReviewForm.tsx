import { ReviewFormProps } from "./ReviewForm.props";
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { useState } from "react";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import CloseIcon from './icons/close.svg';
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSendResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "@/helpers/api";

export const ReviewForm = ({ productId, className, ...rest }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSucces, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const onSubmit: SubmitHandler<IReviewForm> = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true)
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (e: any) {
            setError(e.message);
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className={cn(styles.reviewForm, className, {})}
                {...rest}
            >
                <Input
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                    placeholder="Имя"
                    error={errors.name}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
                    className={styles.title}
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка: </span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{ required: { value: true, message: 'Поставьте оценку' } }}
                        render={({ field }) => (
                            <Rating
                                rating={field.value}
                                setRating={field.onChange}
                                isEditable={true}
                                ref={field.ref}
                                error={errors.rating} />
                        )}
                    />
                </div>
                <TextArea
                    {...register('description', { required: { value: true, message: 'Заполните текст отзыва' } })}
                    className={styles.description}
                    placeholder="Текст отзыва"
                    error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearence='primary'>Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {
                isSucces &&
                <div className={styles.success}>
                    <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                    <div>
                        Спасибо, ваш отзыв будет опубликован после проверки
                    </div>
                    <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
                </div>
            }
            {
                error &&
                <div className={styles.error}>
                    <div className={styles.errorTitle}>Ошибка</div>
                    <div>
                        Что-то пошло не так, попробуйте обновить странницу.
                    </div>
                    <CloseIcon className={styles.close} onClick={() => setError(undefined)} />
                </div>
            }
        </form>
    );
}