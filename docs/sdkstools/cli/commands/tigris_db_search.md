---
id: db-search
title: Db Search
slug: /sdkstools/cli/db-search
---

Searches a collection for documents matching the query

### Synopsis

Executes a search query against collection and returns the search results.

```
tigris db search {collection} [flags]
```

### Examples

```

# Default search without any parameters will return all documents
tigris search --project=myproj users

# Search for a text "Alice" in collection
tigris search --project=myproj users -q "Alice"

# Search for a text "Alice" either in "firstName" or "lastName" fields
tigris search --project=myproj users -q "Alice" -f "firstName,lastName"

# Filter for users with age > 23
tigris search --project=myproj users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}'

# Aggregate results by current city and get top 10 cities
tigris search --project=myproj users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}' --facet '{"currentCity": {"size": 10}}'

# Sort the results by age in increasing order
tigris search --project=myproj users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}' --facet '{"currentCity": {"size": 10}}' --sort '{"age": "$asc"}'

# Exclude sensitive information from results
tigris search --project=myproj users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}' --facet '{"currentCity": {"size": 10}}' --sort '{"age": "$asc"}' -x "phoneNumber,address"

# Paginate the results, with 15 per page
tigris search --project=myproj users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}' --facet '{"currentCity": {"size": 10}}' --sort '{"age": "$asc"}' -x "phoneNumber,address" -p 1 -c 15

# Find users with last name exactly matching "Wong"
tigris search --project=myproj users --filter '{"lastName": "Wong"}'

```

### Options

```
  -q, --query string            query string for searching across text fields
  -f, --searchFields strings    comma separated value of fields to project search query against
      --filter string           further refine the search results using filters (default "{}")
      --facet string            retrieve aggregate  (default "{}")
      --sort strings            order to sort the results
  -i, --includeFields strings   comma separated value of document fields to include in results
  -x, --excludeFields strings   comma separated value of document fields to exclude in results
  -g, --page int32              page of results to retrieve (default 1)
  -c, --pageSize int32          count of results to be returned per page (default 20)
      --branch string           Specifies branch: --branch=my_br1
  -p, --project string          Specifies project: --project=my_proj1
  -h, --help                    help for search
```

### SEE ALSO

- [tigris db](tigris_db.md) - Database related commands
