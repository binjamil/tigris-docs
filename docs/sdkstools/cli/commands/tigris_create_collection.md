---
id: create-collection
title: Create Collection
slug: /sdkstools/cli/create-collection
---

Creates collection(s)

### Synopsis

Creates collections with provided schema.

```
tigris create collection {schema}...|- [flags]
```

### Examples

```

  # Pass the schema as a string
  tigris create collection --project=myproj '{
	"title": "users",
	"description": "Collection of documents with details of users",
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
	},
	"primary_key": [
	  "id"
	]
  }'

  # Create collection with schema from a file
  # $ cat /home/alice/users.json
  # {
  #  "title": "users",
  #  "description": "Collection of documents with details of users",
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
  #  },
  #  "primary_key": [
  #    "id"
  #  ]
  # }
  tigris create collection --project=myproj </home/alice/users.json

  # Create collection with schema passed through stdin
  cat /home/alice/users.json | tigris create collection myproj -
  tigris describe collection --project=myproj users | jq .schema | tigris create collection myproj -

```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -h, --help             help for collection
  -p, --project string   Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris create](tigris_create.md) - Creates project, collection, namespace or app_key
