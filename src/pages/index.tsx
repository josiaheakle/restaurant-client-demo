import * as React from 'react';

import { graphql, StaticQuery } from 'gatsby';

const query = graphql`
query {
  allStrapiMenu {
    nodes {
      title
      id
    }
  }
}
`;

const IndexPage : React.FunctionComponent = () => {

  return (
    <div className="Intro">
    <h1>
      Hello and welcome to restaurant!
    </h1>
    <StaticQuery query={query} render={(data) => 
      <>
      {data.allStrapiMenu.nodes.map((m : {title : string, id : string}, i : number) => {
        return (
          <h1 key={i}>{m.title}</h1>
        );
      })}
      </>
    }/>
    </div>    
  )
}

export default IndexPage
