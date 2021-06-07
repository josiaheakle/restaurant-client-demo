import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

// @ts-ignore
import { FoodMenu as style } from "./FoodMenu.module.css";

interface FoodMenuCardProps {
    title:string;
    imgSrc:string;
    descr:string;
}

const FoodMenuCard: React.FC<FoodMenuCardProps> = ({title, imgSrc, descr}) => {

    console.log({title,imgSrc,descr})

    return (
        <div className={style}>
            <h3>{title}</h3>
            
            <span>{descr}</span>
            <button>view menu</button>
        </div>
    );
}

export {FoodMenuCard};