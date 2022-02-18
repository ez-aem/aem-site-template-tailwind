import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/ez-aem-logo.svg").default,
    description: (
      <>
        EZ-AEM was designed from the ground up to be easily installed and used
        to get your website up and running quickly. No developers required.
      </>
    ),
  },
  // {
  //   title: "Focus on What Matters",
  //   Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
  //   description: (
  //     <>
  //       EZ-AEM lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  {
    title: "Powered by Tailwind CSS",
    Svg: require("../../static/img/tailwindcss.svg").default,
    description: (
      <>
        Gain speed and standardization by using the best-in-class CSS Library
        with excellent tooling and documentation.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
