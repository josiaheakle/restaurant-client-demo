import React from 'react'

import {pages} from "../index";
import { MainLayout } from '../../components/layouts/MainLayout';

interface AboutPageProps {

}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
        return (
            <MainLayout pageTitle='About' pages={pages}>

            </MainLayout>
        );
}

export default AboutPage;