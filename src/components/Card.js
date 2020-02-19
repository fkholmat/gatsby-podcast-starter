import React from "react";
import { FaTag } from "react-icons/fa";
//import { Link } from "gatsby";

class Card extends React.Component {
  render () {
    return(
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://picsum.photos/id/1005/640/480"
              alt="Placeholder"
            />
          </figure>
          <div className="card-content is-overlay">
            <div className="tags has-addons is-right">
              <span className="tag is-primary is-rounded">
                <FaTag />
              </span>
              <span className="tag is-primary">Category</span>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">
              Title
            </p>
            <p className="subtitle is-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
            <p>
              On <time dateTime="2019-4-21">21 Apr 2019</time> | by Furkat
              Kholmatov
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card