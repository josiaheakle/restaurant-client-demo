import { graphql, useStaticQuery } from 'gatsby';
import { ButtonLink } from '../../ui/buttons/ButtonLink';
import * as React from 'react';

import  "./FoodMenu.css";

interface FoodMenuCardProps {
    title:string;
    imgSrc:string;
    descr:string;
}

const FoodMenuCard: React.FC<FoodMenuCardProps> = ({title, imgSrc, descr}) => {

    console.log({title,imgSrc,descr})

    return (
        <div className='FoodMenuCard'>
            <h3>{title}</h3>
            
            <span>{descr}</span>
            <br/>
            <ButtonLink  link='asdf' title='view'></ButtonLink>
        </div>
    );
}

export {FoodMenuCard};