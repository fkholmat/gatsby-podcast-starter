import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";
import "../components/all.sass";

class BlogPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categoryID: "all"
    };
    this.handlePickCategory = this.handlePickCategory.bind(this);
  }

  handlePickCategory (value, e) {
    e.preventDefault();
    let element = document.getElementById(this.state.categoryID)
    element.classList.remove("is-active")
    element = document.getElementById(value)
    element.classList.add("is-active")
    this.setState({categoryID : value});
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <div className="hero is-primary is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Blog Page</h1>
              <h2 className="subtitle">Medium subtitle</h2>
            </div>
          </div>
          <div className="tabs is-boxed">
            <div className="container">
              <ul>
                <li id="all" className="is-active">
                  <a href="/" onClick={(event) => this.handlePickCategory("all", event)}>Latest</a>
                </li>
                {data.allDatoCmsCategory.edges.map(({node: category}) => (
                  <li key={category.id} id={category.id}>
                    <a href="/" onClick={(event) => this.handlePickCategory(category.id, event)}>{category.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <BlogPosts id={this.state.categoryID} />
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query CategoryQuery {
    allDatoCmsCategory(sort: { fields: title }) {
      totalCount
      edges {
        node {
          title
          slug
          id
        }
      }
    }
  }
`;
