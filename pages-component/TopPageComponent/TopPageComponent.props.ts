import { ITopPageModel } from "@/Interfaces/page.interface";
import { IProductModel } from "@/Interfaces/product.interface";

export interface ITopPageProps extends Record<string, unknown> {
    firstCategory: number;
    page: ITopPageModel;
    products: IProductModel[]
}
