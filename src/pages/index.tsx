
// react
import { graphql, StaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

// components
import { MainLayout } from "../components/layouts/MainLayout";

// css 
import "../styles/root.css";

// import { graphql, StaticQuery } from 'gatsby';


// const query = graphql`
// query {
//   allStrapiMenu {
//     nodes {
//       title
//       id
//     }
//   }
// }
// `;

const query = graphql`
  query {
    allStrapiCategory(filter: {title: {eq: "Featured"}}) {
      nodes {
        menu_items {
          Preview {
            url
          }
        }
      }
    }
  }
`;

const pages = [
  {
    title: 'Home',
    link: '/'
  }, {
    title: 'Menu',
    link: '/menu'
  }, {
    title: 'Our Location',
    link: '/location'
  }, {
    title: 'About Us',
    link: '/about'
  }
]

/**
 * 
  <StaticQuery query={query} render={(data) => 
      <>
      {data.allStrapiMenu.nodes.map((m : {title : string, id : string}, i : number) => {
        return (
          <h1 key={i}>{m.title}</h1>
          );
        })}
      </>
    }/>
 */

const IndexPage : React.FunctionComponent = () => {

  return (
    <MainLayout pages={pages} pageTitle='Home'>
      <StaticQuery query={query} render={(data) => 
        <>
          {data.allStrapiCategory.nodes[0].menu_items.map((item : any, index:number) => {
            return <StaticImage key={index} src={`${process.env.GATSBY_API_URL}${item.Preview[0].url}`} alt='uhm' />
          })}
        </>
      } />
    </MainLayout>
  )
}

export default IndexPage
