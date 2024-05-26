import { ProductProps } from "./Product.props";
import styles from './Product.module.css';
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "@/helpers/helpers";
import { Divider } from "../Divider/Divider";
import Image from "next/image";
import cn from 'classnames';
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from 'framer-motion';

export const Product = forwardRef(({ product, className, ...rest }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const ShowReviews = () => {
        setIsReviewOpened(isReviewOpened => !isReviewOpened);
    };
    const reviewRef = useRef<HTMLDivElement>(null);
    const scrollToReview = () => {
        setIsReviewOpened(true)
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    const variants = {
        visible: {
            opacity: 1,
            height: 'auto',
        },
        hidden: {
            opacity: 0,
            height: 0,
            overflow: 'hidden'
        }
    }
    return (
        <div className={className} {...rest} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>
                    {priceRu(product.credit)} / <span className={styles.month}>мес</span>
                </div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>{product.reviewCount} <a href="#ref" onClick={scrollToReview}>{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
                <Divider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.features}>
                    {product.characteristics.map(c => (
                        <div key={c.name} className={styles.characteristics}>
                            <span className={styles.characteristicName}>{c.name}</span>
                            <span className={styles.characteristicDots}></span>
                            <span className={styles.characteristicValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBloc}>
                    {
                        product.advantages &&
                        <div className={styles.advantages}>
                            <div className={styles.advTitle}>Преимущества</div>
                            <div>{product.advantages}</div>
                        </div>
                    }
                    {
                        product.disadvantages &&
                        <div className={styles.disadvantages}>
                            <div className={styles.advTitle}>Недостатки</div>
                            <div>{product.disadvantages}</div>
                        </div>
                    }
                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button appearence='primary' >Узнать подробнее</Button>
                    <Button appearence='ghost' arrow={!isReviewOpened ? "right" : "down"} className={styles.reviewButton} onClick={ShowReviews} >Читать отзывы</Button>
                </div>
            </Card>

            <motion.div variants={variants} animate={isReviewOpened ? 'visible' : 'hidden'} initial={'hidden'}>
                <Card
                    color='blue'
                    className={cn(styles.reviews)}
                    ref={reviewRef}
                >
                    {product?.reviews && product?.reviews.map(r => (
                        <div key={r._id}>
                            <Review review={r} />
                            <Divider />
                        </div>
                    ))}
                    <ReviewForm productId={product._id} />
                </Card>
            </motion.div>
        </div>
    );
});

Product.displayName = 'Product';

export const MotionProductComponent = motion(Product, { forwardMotionProps: true });