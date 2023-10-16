import HTag from "@/components/HTag";
import withLayout from "@/layout/Layout";

export const Error404 = ():JSX.Element => {
    return (
        <HTag tag="h1">ERROR 404</HTag>
    );
};

export default withLayout(Error404);
