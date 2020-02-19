import React from "react";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <section className="hero is-primary is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Shop Page</h1>
            <h2 className="subtitle">Medium subtitle</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-4">Current Episode</h1>
        </div>
      </section>
    </Layout>
  );
};