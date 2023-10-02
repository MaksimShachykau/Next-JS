import { useState } from 'react';
import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import Input from "../Input";
import Rating from "../Rating";
import TextAria from "../TextAria";
import Button from "../Button";
import CloseBtn from './CloseBtn.svg';
import { useForm, Controller } from "react-hook-form";
import { IFormInterface, IReviewSentResponse } from "./FormInterface";
import axios from "axios";
import { API } from "@/helpers/api";

const ReviewForm = ({ productId, ...props }: ReviewFormProps): JSX.Element => {
    const { handleSubmit, register, control, formState: { errors } } = useForm<IFormInterface>();

    const [isSentSuccess, setIsSentSuccess] = useState<boolean | undefined>();

    const onSubmit = async (formData: IFormInterface) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId } );
            if(data.message) {
                setIsSentSuccess(true);
            } else {
                setIsSentSuccess(false);
            }
        } catch (e) {
            setIsSentSuccess(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.reviewForm} id={productId} {...props}>
                <Input
                    {...register('name', {required: {value: true, message: 'Name is required'}})}
                    placeholder="Name"
                    error={errors.name}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Title is required' } })}
                    placeholder="Title review"
                    className={styles['reviewTitle']}
                    error={errors.title}
                />
                <div className={styles['rating']}>
                    <Controller
                        name="rating"
                        control={control}
                        rules={
                            { required: { value: true, message: 'Rating is required' } }
                        }
                        render={({ field }) => (
                            <Rating withText rating={field.value} error={errors.rating} ref={field.ref} isEditable setRating={field.onChange}/>
                        )}
                    />
                </div>
                <TextAria
                    {...register('description', { required: { value: true, message: 'description is required' } })}
                    placeholder="Review text"
                    className={styles['reviewText']}
                    error={errors.description}
                />
                <div className={styles['sendBlock']}>
                    <Button appearance="primary" type="submit">Send review</Button>
                    <p>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
                </div>
            </div>
            {isSentSuccess && <div className={styles['sendResponse']}>
                <p className={styles['sendResponse-title']}>Your review sended</p>
                <p className={styles['sendResponse-text']}>Thanks for you review</p>
                <CloseBtn className={styles['sendResponse-bpn']} onClick={() => setIsSentSuccess(undefined)} />
            </div>}
            {isSentSuccess === false && <div className={styles['sendResponseError']}>
                <p className={styles['sendResponseError-title']}>Your review sended</p>
                <CloseBtn className={styles['sendResponseError-bpn']} onClick={() => setIsSentSuccess(undefined)} />
            </div>}
        </form>
    );
};

export default ReviewForm;
