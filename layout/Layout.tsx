import React, { FunctionComponent } from 'react';

import { ILayoutProps } from './Layout.props';

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '@/context/app.context';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
    return (
            <div className={styles.wrapper}>
                <Header className={styles.header} />
                <Sidebar className={styles.sidebar} />
                <div className={styles.body}>
                    {children}
                </div>
                <Footer className={styles.footer} />
            </div>
    );
};

const withLayout = <T extends Record<string, unknown> & IAppContext> (Component: FunctionComponent<T>): FunctionComponent<T> => {
    const WrappedComponent = (props: T): JSX.Element => {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>

        );
    };

    return WrappedComponent;
};

export default withLayout;
