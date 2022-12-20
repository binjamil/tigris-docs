---
id: search
slug: /searching/
---

# Searching

Tigris provides an embedded full-text search engine that gives you a
seamless and scalable experience for building rich search experiences in
your app. Built on Typesense, the embedded search engine eliminates the need
to run a separate search system alongside your database.

:::info Automatic Indexing

Tigris automatically indexes the data in collections and topics,
providing rich search capability out-of-the-box.

:::

![Search Architecture](/img/search.jpg)

## Features

Tigris embedded search provides the following rich set of features:

- **Full-text search**: Ability to perform full-text search queries on the
  collections
- **Faceted search**: Ability to perform facet query to aggregate search
  results by fields.
- **Searching on nested fields**: Ability to perform search on nested fields
- **Projection**: Ability to include or exclude fields that are not needed in
  the result

## Search queries

Tigris TypeScript SDK provides the following API to search documents or events
in a collection or topic:

- [search()](../typescript/database/search#searching-for-documents): search for one
  or more documents or events in a collection or topic

## Search filters

The search operations allow specifying filters on any of the fields.

Filters support the following comparison operators:

- **EQ**: equal to is used for exact matching
- **LT**: less than is used for matching documents using less than criteria
- **LTE**: less than or equal to is similar to **LT** but also matches for
  equality
- **GT**: greater than is used for matching documents using greater than
  criteria
- **GTE**: greater than or equal to is similar to **GT** but also matches
  for equality

For multiple conditions, there are two logical operators provided:

- **OR**: Combines multiple filter operators and returns documents when
  either condition is met
- **AND**: Combines multiple filter operators and returns documents when all
  the conditions are met

## Further reading

Checkout the language-specific reference sections to learn more about
using search in your favorite language.

- [Search in TypeScript](../typescript/database/search)
- [Search in Go](../golang/database/search)
- [Search in Java](../java/database/search)
