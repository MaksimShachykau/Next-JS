import { IMenuItem } from "@/Interfaces/menu.interface";
import { ITopPageModel } from "@/Interfaces/page.interface";
import { IProductModel } from "@/Interfaces/product.interface";
import { API } from "@/helpers/api";
import withLayout from "@/layout/Layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

const Home = ({ page }: IProductProps):JSX.Element => {

    return (
      <>{page?.category && page.category}</>
    );
};

export default withLayout(Home);

const firstCategory = 1;

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, { firstCategory });

    return{
        paths: menu.flatMap(m => m.pages.map(p => `/services/${p.alias}`)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<IProductProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound: true
        };
    }

    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, { firstCategory });
    const { data: page } = await axios.get<ITopPageModel>(`${API.topPage.byAlias}${params.alias}`);
    const { data: products } = await axios.post<IProductModel[]>(API.product.find, {
      category: page.category,
      limit: 10
    });

    return {
        props: {
            menu,
            page,
            products,
            firstCategory
        }
    };
};

interface IProductProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
    page: ITopPageModel;
    products: IProductModel[]
}
