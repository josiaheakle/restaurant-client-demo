import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';


import { FoodMenuCard } from './FoodMenuCard';
import "./FoodMenu.css";
import { getImageUrl } from '../../../util/getImageUrl';

interface FoodMenuCardContainerProps {
    
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
    allStrapiSection(filter: {section: {eq: "menu"}}) {
      nodes {
        preview {
          alternativeText
          url
          width
          height
        }
        title
        subtitle
        description
      }
    }
  }
`;




    


const FoodMenuCardContainer: React.FC<FoodMenuCardContainerProps> = ({}) => {

  const data = useStaticQuery(query);

  const menus : Array<{
    title:string;
    imgSrc:string;
    descr:string;
    slug:string;
  }> = data.allStrapiMenu.nodes.map((menu:any)=>{
    return {
        title:menu.title,
        imgSrc: menu.preview.formats.medium.url,
        descr: menu.description,
        slug: menu.slug
    }
  });

  const sectionData : {
    preview: {
      alternativeText: string;
      url:string;
      width:number;
      height:number;
    },
    title:string;
    subtitle:string;
    description:string;
  } = useStaticQuery(query).allStrapiSection.nodes[0];



    console.log({menus, sectionData});

    return (
        <div id='menu' className='FoodMenuCardContainer' style={{
          backgroundImage:`url(${getImageUrl(sectionData.preview.url)})`
        }}>
          <div className='FoodMenuHeader'>
            <h1>{sectionData.title}</h1>
          </div>

          <div className='FoodMenuContainer'>
            {menus.map((menu, i) => <FoodMenuCard key={i} title={menu.title} imgSrc={menu.imgSrc} descr={menu.descr} />)}
          </div>
        </div>
    );
}

export {FoodMenuCardContainer};