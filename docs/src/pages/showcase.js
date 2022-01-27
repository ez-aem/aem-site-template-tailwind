import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function ShowcaseHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Showcase</h1>
        <p className="hero__subtitle">
          Check out the great sites that have been made with the Tailwind AEM
          Site Template
        </p>
      </div>
    </header>
  );
}

export default function Showcase() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Showcase`}
      description="Learn Best Practices for AEM Site Templates"
    >
      <ShowcaseHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
