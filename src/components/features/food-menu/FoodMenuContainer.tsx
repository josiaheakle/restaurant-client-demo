import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';


import { FoodMenuCard } from './FoodMenuCard';
// @ts-ignore
import { FoodMenuContainer as style } from "./FoodMenu.module.css";

interface FoodMenuContainerProps {
    
}

const query = graphql`
query {
    allStrapiMenu {
      nodes {
        title
        preview {
          formats {
            medium {
              url
            }
          }
        }
        description
        slug
      }
    }
  }
`;

interface Menu {
    title:string;
    imgSrc:string;
    descr:string;
    slug:string;
}

const useFoodMenus = () => {
    const foodMenus : Array<Menu> = useStaticQuery(query).allStrapiMenu.nodes.map((menu:any)=>{
        return {
            title:menu.title,
            imgSrc: menu.preview.formats.medium.url,
            descr: menu.description,
            slug: menu.slug
        }
    });
    
    return foodMenus;
}

const FoodMenuContainer: React.FC<FoodMenuContainerProps> = ({}) => {

    const menus = useFoodMenus();

    console.log(menus);

    return (
        <div id='menu' className={style}>
          {menus.map((menu, i) => <FoodMenuCard key={i} title={menu.title} imgSrc={menu.imgSrc} descr={menu.descr} />)}
        </div>
    );
}

export {FoodMenuContainer};