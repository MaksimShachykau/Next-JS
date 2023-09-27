import { format } from "date-fns";
import { ReviewProps } from "./Review.props";
import styles from './Review.module.css';

import UserIcon from './userIcon.svg';
import Rating from "../Rating";

const Review = ({ review, ...props }: ReviewProps): JSX.Element => {
    const { name, title, description, rating, createdAt } = review;
    return (
        <div className={styles.review} {...props}>
            <UserIcon />
            <div className={styles.title}>
                <span className={styles.name}>{name}</span>
                <span>{title}</span>
            </div>
            <div className={styles.date}>{format(new Date(createdAt), 'dd MMMM yyy')}</div>
            <Rating rating={rating} />
            <div className={styles.description}>{description}</div>
        </div>
    );
};

export default Review;
