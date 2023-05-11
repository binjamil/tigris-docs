---
id: alter-collection
title: Alter Collection
slug: /sdkstools/cli/alter-collection
---

Updates collection schema

### Synopsis

Updates collection schema.

```
tigris alter collection {schema} [flags]
```

### Examples

```

  # Pass the schema as a string
  tigris alter collection --project=myproj '{
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

```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -h, --help             help for collection
  -p, --project string   Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris alter](tigris_alter.md) - Alters collection
