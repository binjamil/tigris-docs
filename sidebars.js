/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docs: [
    {
      type: "category",
      label: "Overview",
      link: {
        type: "doc",
        id: "overview/intro",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Key Concepts",
          link: {
            type: "doc",
            id: "overview/concepts",
          },
          collapsed: true,
          items: [
            "overview/datamodel",
            "overview/query",
            "overview/search",
            "overview/event",
          ],
        },
        "overview/architecture/architecture",
        "overview/features",
      ],
    },
    {
      type: "doc",
      label: "Quickstart",
      id: "quickstart/quickstart",
    },
    {
      type: "category",
      label: "TypeScript Reference",
      link: {
        type: "doc",
        id: "typescript/index",
      },
      collapsed: true,
      items: [
        "typescript/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "typescript/datamodel/overview",
          },
          collapsed: false,
          items: [
            "typescript/datamodel/declare",
            "typescript/datamodel/primary-key",
            "typescript/datamodel/embedded",
          ],
        },
        "typescript/insert",
        "typescript/update",
        "typescript/delete",
        "typescript/query",
        "typescript/search",
        "typescript/transactions",
        "typescript/event_streaming",
      ],
    },
    {
      type: "category",
      label: "HTTP Reference",
      collapsed: true,
      link: {
        type: "doc",
        id: "http/index",
      },
      items: [
        "http/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "http/datamodel/overview",
          },
          collapsed: false,
          items: [
            "http/datamodel/declare",
            "http/datamodel/primary-key",
            "http/datamodel/embedded",
            "http/datamodel/types",
          ],
        },
        "http/insert",
        "http/update",
        "http/delete",
        "http/query",
        "http/search",
        "http/event_streaming",
      ],
    },
    {
      type: "category",
      label: "Go Reference",
      link: {
        type: "doc",
        id: "golang/index",
      },
      collapsed: true,
      items: [
        "golang/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "golang/datamodel/overview",
          },
          collapsed: false,
          items: [
            "golang/datamodel/declare",
            "golang/datamodel/primary-key",
            "golang/datamodel/embedded",
            "golang/datamodel/types",
          ],
        },
        "golang/insert",
        "golang/update",
        "golang/delete",
        "golang/query",
        "golang/search",
        "golang/transactions",
      ],
    },
    {
      type: "category",
      label: "Java Reference",
      link: {
        type: "doc",
        id: "java/index",
      },
      collapsed: true,
      items: [
        "java/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "java/datamodel/overview",
          },
          collapsed: false,
          items: [
            "java/datamodel/declare",
            "java/datamodel/primary-key",
            "java/datamodel/embedded",
            "java/datamodel/types",
          ],
        },
        "java/insert",
        "java/update",
        "java/delete",
        "java/query",
        "java/search",
        "java/transactions",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "tutorials/rest-webapp-typescript",
        "tutorials/rest-webapp-go",
        "tutorials/rest-webapp-java",
      ],
    },
    {
      type: "doc",
      label: "Authentication",
      id: "authentication/authentication",
    },
    {
      type: "category",
      label: "Command Line Interface",
      link: {
        type: "doc",
        id: "cli/overview",
      },
      collapsed: true,
      items: [
        "cli/authentication",
        "cli/installation",
        "cli/configuration",
        "cli/working-locally",
        {
          type: "category",
          label: "Reference",
          items: [
            "cli/reference/alter-application",
            "cli/reference/alter-collection",
            "cli/reference/completion",
            "cli/reference/config-show",
            "cli/reference/create-application",
            "cli/reference/create-collection",
            "cli/reference/create-database",
            "cli/reference/delete",
            "cli/reference/describe-collection",
            "cli/reference/describe-database",
            "cli/reference/dev-logs",
            "cli/reference/dev-start",
            "cli/reference/dev-stop",
            "cli/reference/drop-application",
            "cli/reference/drop-collection",
            "cli/reference/drop-database",
            "cli/reference/generate-sample-schema",
            "cli/reference/insert",
            "cli/reference/list-applications",
            "cli/reference/list-collections",
            "cli/reference/list-databases",
            "cli/reference/login",
            "cli/reference/logout",
            "cli/reference/ping",
            "cli/reference/publish",
            "cli/reference/read",
            "cli/reference/replace",
            "cli/reference/scaffold-go",
            "cli/reference/search",
            "cli/reference/server-info",
            "cli/reference/server-version",
            "cli/reference/subscribe",
            "cli/reference/transact",
            "cli/reference/update",
            "cli/reference/version",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
