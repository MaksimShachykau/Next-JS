import React, { FunctionComponent } from 'react';
import { ILayoutProps } from './Layout.props';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </div>
    );
};

const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>): FunctionComponent<T> => {
    const WrappedComponent = (props: T): JSX.Element => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };

    return WrappedComponent;
};

export default withLayout;
