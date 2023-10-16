import HTag from "@/components/HTag";
import withLayout from "@/layout/Layout";

export const Error500 = ():JSX.Element => {
    return (
        <HTag tag="h1">ERROR 500</HTag>
    );
};

export default withLayout(Error500);
