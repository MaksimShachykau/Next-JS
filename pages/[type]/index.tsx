import { IMenuItem } from "@/Interfaces/menu.interface";
import { API } from "@/helpers/api";
import { firstLevelMenu } from "@/helpers/helpers";
import withLayout from "@/layout/Layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

const Type = ({ firstCategory }: ITypeProps):JSX.Element => {
    return (
        <>Type - {firstCategory}</>
    );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: firstLevelMenu.map(m => `/${m.route}`),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ITypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound: true
        };
    }

    const firstCategoryItem = firstLevelMenu.find(e => e.route === params.type);

    if(!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, { firstCategory: firstCategoryItem.id });

    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface ITypeProps {
    menu: IMenuItem[],
    firstCategory: number
}
