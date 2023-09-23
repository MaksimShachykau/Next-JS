import { IProductProps } from "./Product.props";

const Product = ({ product }: IProductProps): JSX.Element => {
    return <div>{product.title}</div>;
};

export default Product;
