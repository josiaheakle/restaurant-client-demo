// react & gatsby
import * as React from "react";
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby";

// components
import { Background } from "../components/ui/background/Background";
import { ButtonLinkContainer } from "../components/ui/buttons/ButtonLinkContainer";
import { MainLayout } from "../components/layouts/MainLayout";

// css
import "../styles/root.css";

const backgroundImgQuery = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "pexels-rachel-claire-6127275.jpg" }
      }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

// featured items image query
const featuredItemsQuery = graphql`
  query {
    allStrapiCategory(filter: { title: { eq: "Featured" } }) {
      nodes {
        menu_items {
          preview {
            alternativeText
            url
          }
        }
      }
    }
  }
`;

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
  title: "About",
  link: "/about",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Find Us",
    link: "/location",
  },
];

/**
 * 
 *  <StaticQuery query={query} render={(data) => 
        <>
        {data.allStrapiCategory.nodes[0].menu_items.map((item : any, index:number) => {
          return <img key={index} src={`${process.env.GATSBY_API_URL}${item.preview[0].url}`} alt={item.preview[0].alternativeText} />
        })}
        </>
      } />
 */

const mainStyle: React.CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const subMainStyle: React.CSSProperties = {
  padding: "3rem",
  outlineOffset: "2rem",
  outline: "1rem solid var(--yellow)",
  backgroundColor: "var(--yellow)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const IndexPage: React.FunctionComponent = () => {
  
  const bgImg =
    useStaticQuery(backgroundImgQuery).allFile.edges[0].node.publicURL;

  return (
    <Background backgroundImg={bgImg}>
      <MainLayout pages={pages} pageTitle="Bob's Bistreaux">
      

      
      </MainLayout>
    </Background>
  );
};

export default IndexPage;

export { pages };
