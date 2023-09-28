import cn from 'classnames';
import { useState } from 'react';
import Image from 'next/image';

import Card from "../Card";
import { IProductProps } from "./Product.props";
import styles from "./Product.module.css";
import Rating from "../Rating";
import Tag from "../Tag";
import Button from "../Button";
import HTag from "../HTag";
import getPrice from "@/helpers/getPrice";
import { pluralEnd } from '@/helpers/helpers';
import Review from '../Review';


const Product = ({ product }: IProductProps): JSX.Element => {
  const [isOpenReviews, setIsOpenReviews] = useState<boolean>(false);
  return (
    <>
      <Card className={styles.Product}>
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
          width={70}
          height={70}
          className={styles.logo}
        />
        <HTag tag="h3" className={styles.title}>{product.title}</HTag>
        <div className={styles.price}>
          {getPrice(product.price)}
          <Tag color="green" className={styles.oldPrice}>{getPrice(product.oldPrice)}</Tag>
        </div>
        <div className={styles.credit}>
          {getPrice(product.credit)}/<span>month</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.categories}>
          {product.categories.map((c) => (
            <Tag key={c} color="ghost">
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceText}>Price</div>
        <div className={styles.creditText}>Credit</div>
        <div className={styles.reviewText}>{product.reviewCount} {pluralEnd(product.reviewCount, 'review')}</div>
        <hr className={styles.hr}/>
        <div className={styles.description}>
          {product.description}
        </div>
        <div className={cn(styles.characteristicsBlock, {
          [styles.characteristicsBlockFullBlock]: !product.advantages && !product.disadvantages
        })}>
          <div className={styles.characteristics}>{product.characteristics.map(c => (
              <div key={c.name} className={styles.characteristic}>
                  <span>{c.name}</span>
                  <span className={styles.pointSpace}/>
                  <span>{c.value}</span>
              </div>
          ))}</div>
          <Button appearance="ghost">Job guarantee</Button>
        </div>
        <div className={styles.adwBlock}>
          {product.advantages && <div className={styles.advantage}>
            <HTag tag="h3">Advantages</HTag>
            {product.advantages}
          </div>}
          {product.disadvantages && <div className={styles.disadvantage}>
            <HTag tag="h3">Disadvantages</HTag>
            {product.disadvantages}
          </div>}
        </div>
        <hr className={cn(styles.hr, styles.hr2)}/>
        <div className={styles.actions}>
          <Button appearance="primary">About</Button>
          <Button
            onClick={() => setIsOpenReviews(!isOpenReviews)}
            disabled={!product.reviews || !product.reviews.length}
            appearance="ghost"
            arrow={isOpenReviews ? 'down' : 'right'}
          >
              {!product.reviews || !product.reviews.length ? 'No Reviews' : 'Rear reviews'}
          </Button>
        </div>
      </Card>
      <Card background='blue' className={cn(styles.reviews, {
        [styles.reviewsOpen]: isOpenReviews,
        [styles.reviewsClosed]: !isOpenReviews,
      })}>
        {product.reviews.map(r => (
          <>
            <Review key={r._id} review={r}/>
            <hr className={styles.hr}/>
          </>
          )
        )}
      </Card>
    </>
  );
};

export default Product;
