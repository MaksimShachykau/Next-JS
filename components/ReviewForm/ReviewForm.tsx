import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import Input from "../Input";
import Rating from "../Rating";
import TextAria from "../TextAria";
import Button from "../Button";
import CloseBtn from './CloseBtn.svg';
import { useForm, Controller } from "react-hook-form";
import { IFormInterface } from "./FormInterface";

const ReviewForm = ({ productId, ...props }: ReviewFormProps): JSX.Element => {
    const { handleSubmit, register, control } = useForm<IFormInterface>();

    const onSubmit = (data: IFormInterface) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.reviewForm} id={productId} {...props}>
                <Input {...register('name')} placeholder="Name" />
                <Input {...register('title')} placeholder="Title review" className={styles['reviewTitle']}/>
                <div className={styles['rating']}>
                    <span>Grade:</span>
                    <Controller
                        name="rating"
                        control={control}
                        render={({ field }) => (
                            <Rating rating={field.value} ref={field.ref} isEditable setRating={field.onChange}/>
                        )}
                    />
                </div>
                <TextAria {...register('description')} placeholder="Review text" className={styles['reviewText']} />
                <div className={styles['sendBlock']}>
                    <Button appearance="primary" type="submit">Send review</Button>
                    <p>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
                </div>
            </div>
            <div className={styles['sendResponse']}>
                <p className={styles['sendResponse-title']}>Your review sended</p>
                <p className={styles['sendResponse-text']}>Thanks for you review</p>
                <CloseBtn className={styles['sendResponse-bpn']}/>
            </div>
        </form>
    );
};

export default ReviewForm;
