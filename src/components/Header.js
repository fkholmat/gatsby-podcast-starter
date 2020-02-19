import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }

    // On window's 'scroll' event type
    window.addEventListener("scroll", () => {
      // window.pageYOffset of 0.0 indicates top edge of the document
      const isScrolled = window.pageYOffset > 0;
      if (isScrolled) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  render() {
    return (
      < >
        <Helmet>
          <html lang="en" className="has-navbar-fixed-top" />
        </Helmet>
        <header
          className={
            this.state.scrolled
              ? "navbar is-fixed-top is-spaced scrolled"
              : "navbar is-fixed-top is-spaced"
          }
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                  alt="logo"
                />
              </Link>

              <div className="navbar-burger burger" data-target="navMenu">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </div>
            </div>
            <nav id="navMenu" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link has-text-weight-medium" to="/podcast/episodes">
                    Podcast
                  </Link>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item has-text-weight-medium" to="/podcast/episodes">
                      Episodes
                    </Link>
                    <Link className="navbar-item has-text-weight-medium" to="/podcast/subscribe">
                      Subscribe
                    </Link>
                  </div>
                </div>                
                <Link className="navbar-item has-text-weight-medium" to="/blog">
                  <span>Blog</span>
                </Link>
                <Link className="navbar-item has-text-weight-medium" to="/shop">
                  Shop
                </Link>
                <Link className="navbar-item has-text-weight-medium" to="/donate">
                  Donate
                </Link>
                <div className="navbar-item">
                  <div className="buttons">
                    <Link
                      className="button is-primary is-uppercase"
                      to="/subscribe"
                    >
                      Newsletter
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
