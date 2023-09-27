import { IReviewModel } from "@/Interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: IReviewModel
}
