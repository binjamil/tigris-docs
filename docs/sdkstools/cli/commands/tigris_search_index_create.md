---
id: search-index-create
title: Search Index Create
slug: /sdkstools/cli/search-index-create
---

Creates index(s)

### Synopsis

Creates indexes with provided schema.

```
tigris search index create {schema}...|- [flags]
```

### Examples

```

  # Pass the schema as a string
  tigris search create index --project=myproj '{
	"title": "users",
	"description": "Index of documents with details of users",
	"properties": {
	  "id": {
		"description": "A unique identifier for the user",
		"type": "integer"
	  },
	  "name": {
		"description": "Name of the user",
		"type": "string",
		"maxLength": 100
	  }
	}
  }'

  # Create index with schema from a file
  # $ cat /home/alice/users.json
  # {
  #  "title": "users",
  #  "description": "Index of documents with details of users",
  #  "properties": {
  #    "id": {
  #      "description": "A unique identifier for the user",
  #      "type": "integer"
  #    },
  #    "name": {
  #      "description": "Name of the user",
  #      "type": "string",
  #      "maxLength": 100
  #    }
  #  }
  # }
  tigris search create index --project=myproj </home/alice/users.json

  # Create index with schema passed through stdin
  cat /home/alice/users.json | tigris search create index myproj -
  tigris search describe index --project=myproj users | jq .schema | tigris search create index myproj -

```

### Options

```
  -h, --help             help for create
  -p, --project string   Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris search index](tigris_search_index.md) - Search index related commands
