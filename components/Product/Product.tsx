/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import Card from "../Card";
import { IProductProps } from "./Product.props";

import styles from "./Product.module.css";
import Rating from "../Rating";
import Tag from "../Tag";
import Button from "../Button";
import HTag from "../HTag";
import getPrice from "@/helpers/getPrice";
import { pluralEnd } from '@/helpers/helpers';

const Product = ({ product }: IProductProps): JSX.Element => {
  return (
    <Card className={styles.Product}>
      <img
        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
        alt={product.title}
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
      <hr className={styles.hr}/>
      <div className={styles.actions}>
        <Button appearance="primary">About</Button>
        <Button appearance="ghost" arrow={'right'}>Rear reviews</Button>
      </div>
    </Card>
  );
};

export default Product;
