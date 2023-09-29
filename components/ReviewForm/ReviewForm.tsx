import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import Input from "../Input";
import Rating from "../Rating";
import TextAria from "../TextAria";
import Button from "../Button";
import CloseBtn from './CloseBtn.svg';

const ReviewForm = ({ productId, ...props }: ReviewFormProps): JSX.Element => {
    return (
        <>
            <div className={styles.reviewForm} id={productId} {...props}>
                <Input placeholder="Name" />
                <Input placeholder="Title review" className={styles['reviewTitle']}/>
                <div className={styles['rating']}>
                    <span>Grade:</span>
                    <Rating rating={0} />
                </div>
                <TextAria placeholder="Review text" className={styles['reviewText']} />
                <div className={styles['sendBlock']}>
                    <Button appearance="primary">Send review</Button>
                    <p>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
                </div>
            </div>
            <div className={styles['sendResponse']}>
                <p className={styles['sendResponse-title']}>Your review sended</p>
                <p className={styles['sendResponse-text']}>Thanks for you review</p>
                <CloseBtn className={styles['sendResponse-bpn']}/>
            </div>
        </>
    );
};

export default ReviewForm;
