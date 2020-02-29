import React from "react";
import { graphql } from "gatsby";
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

  handlePickCategory(value, e) {
    e.preventDefault();
    let element = document.getElementById(this.state.categoryID)
    element.classList.remove("is-active")
    element = document.getElementById(value)
    element.classList.add("is-active")
    this.setState({ categoryID: value });
  }

  render() {
    const { data } = this.props;

    // Get only currently used Categories in Blogs
    const activeCategories = data.allDatoCmsBlog.edges.map((edge) => (
      edge.node.category.map((element) => (element))
    )).flat() // flatten nested array objects; might contain duplicates

    // Remove duplicate objects from array
    const uniqueActiveCategories = Array.from(new Set(activeCategories.map(category => category.id))) 
      .map(id => {
        // return categories from original activeCategories
        return activeCategories.find(category => category.id === id) 
      })

    return (
      < >
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
                {uniqueActiveCategories.map((object) => (
                  <li key={object.id} id={object.id}>
                    <a href="/" onClick={(event) => this.handlePickCategory(object.id, event)}>{object.title}</a>
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
      </>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query CategoryQuery {
    allDatoCmsBlog(filter: {}) {
      edges {
        node {
          category {
            title
            id
          }
        }
      }
    }
  }
`;
