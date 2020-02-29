import React from "react";
import Header from "./Header";
import PodcastPlayer from "./PodcastPlayer"
import "./all.sass";

class Layout extends React.Component {
  render() {
    return (
      < >
        <Header />
        <main>
          {this.props.children}
        </main>
        <PodcastPlayer />
      </>
    );
  }
}

export default Layout;