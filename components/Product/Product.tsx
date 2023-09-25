/* eslint-disable @next/next/no-img-element */
import Card from "../Card";
import { IProductProps } from "./Product.props";

import styles from "./Product.module.css";
import Rating from "../Rating";
import Tag from "../Tag";
import Button from "../Button";

const Product = ({ product }: IProductProps): JSX.Element => {
  return (
    <Card className={styles.Product}>
      <img
        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
        alt={product.title}
        className={styles.logo}
      />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
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
      <div className={styles.reviewText}>{product.reviewCount} reviews</div>
      <hr className={styles.hr}/>
      <div className={styles.characteristicsBlock}>
        <div className={styles.characteristics}>{product.characteristics.map(c => (
            <div key={c.name} className={styles.characteristic}>
                <span>{c.name}</span>
                <span>{c.value}</span>
            </div>
        ))}</div>
        <Button appearance="ghost">Job guarantee</Button>
      </div>
      <div className={styles.adwBlock}>
        <div className={styles.advantage}>{product.advantages}</div>
        <div className={styles.disadvantage}>{product.disadvantages}</div>
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
