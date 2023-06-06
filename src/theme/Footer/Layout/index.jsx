import tigrisConfig from "@site/tigris.config.js";

/* eslint-disable react/prop-types */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import Docsly from "@docsly/react";
import "@docsly/react/styles.css";

import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function FooterLayout({ style, links, logo, copyright }) {
  const { pathname } = useLocation();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  return (
    <>
      <footer
        className={clsx("footer", {
          "footer--dark": style === "dark",
        })}
      >
        <div className="container container-fluid">
          {logo && <div className="margin-bottom--sm">{logo}</div>}
          <p className="footer__description">
            Tigris is the storage platform for real-time apps. Quickly and
            easily store and access any amount of data for a wide range of use
            cases, such as cloud-native applications, and mobile apps.
          </p>
          <div className="footer__row">
            {/* <div className="footer__data">
              <div className="footer__cta">
                <Link href={tigrisConfig.signupUrl}>Sign Up</Link>
              </div>
            </div> */}
            <div className="links">{links}</div>
          </div>
          {copyright && (
            <div className="footer__bottom text--center">{copyright}</div>
          )}
        </div>

        <Docsly
          publicId={customFields.docslyPublicId}
          pathname={pathname}
          appearance={{
            docslyToolboxStyles:
              "dy-bg-black dy-text-neutral-100 docsly-toolbox",
          }}
        />
      </footer>
    </>
  );
}
