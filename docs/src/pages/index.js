import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttonContainer}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/ez-aem/aem-site-template-tailwind/releases/latest"
            >
              Download️
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--lg"
              to="/quick-start"
            >
              Quick Start Guide - 5min ⏱️
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn Best Practices for AEM Site Templates"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
