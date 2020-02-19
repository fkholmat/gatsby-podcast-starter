import React from "react";
import { StaticQuery, graphql } from "gatsby";
//import Masonry from 'react-masonry-component'
//import Card from "./Card";

const Header = ({ data }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <img src={data.allDatoCmsBlog.edges[0].node.heroImage.fluid.src} alt="Placeholder" />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <p className="title is-4">{data.allDatoCmsBlog.edges[0].node.title}</p>
        <p className="subtitle is-6">
        {data.allDatoCmsBlog.edges[0].node.excerpt}
        </p>
        <p>
          Written on {data.allDatoCmsBlog.edges[0].node.date + " | by " + data.allDatoCmsBlog.edges[0].node.author.name}
        </p>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsBlog(
          filter: {
            category: {
              elemMatch: { id: { eq: "DatoCmsCategory-2346675-en" } }
            }
          }
          limit: 12
          sort: { fields: date }
        ) {
          edges {
            node {
              title
              slug
              id
              author {
                name
                profilePicture {
                  fixed {
                    src
                  }
                }
              }
              date(formatString: "MMMM DD, YYYY")
              excerpt
              heroImage {
                fluid {
                  src
                }
                alt
              }
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
