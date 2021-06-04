import React from 'react';
import {Helmet} from 'react-helmet';

import { Header } from "./header/Header";

interface MainLayoutProps {
    pageTitle: string;
    icon? : {
        src: string;
        alt: string;
    }
    pages: Array<{
        title: string;
        link: string;
    }>
}

export const MainLayout: React.FC<MainLayoutProps> = ({pageTitle, pages, children}) => {
        return (
            <>
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Restaurant website designed, developed and deployed by Josiah Eakle." />
                </Helmet>
                <Header pageTitle={pageTitle} pages={pages} />
                {children}
            </>
        );
}