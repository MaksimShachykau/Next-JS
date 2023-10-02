import { IProductModel } from "@/Interfaces/product.interface";
import { SortEnum } from "./Sort.props";

export type sortActions = {type: SortEnum.ByRate} | {type: SortEnum.byPrice} | {type: 'reset', initialState: IProductModel[]};

export interface sortReducerState {
    sort: SortEnum,
    products: IProductModel[]
}

export const sortReducer = (state: sortReducerState, action: sortActions): sortReducerState => {
    switch(action.type) {
        case SortEnum.ByRate:
            return {
                sort: SortEnum.ByRate,
                products: state.products.sort((a, b) => a.initialRating - b.initialRating > 0 ? 1 : -1)
            };
        case SortEnum.byPrice:
            return {
                sort: SortEnum.byPrice,
                products: state.products.sort((a, b) => a.price - b.price > 0 ? 1 : -1)
            };
        case 'reset':
            return {
                sort: SortEnum.byPrice,
                products: action.initialState
            };
        default:
            throw new Error('Error');
    }
};
