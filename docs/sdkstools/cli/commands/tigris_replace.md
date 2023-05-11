---
id: replace
title: Replace
slug: /sdkstools/cli/replace
---

Inserts or replaces document(s)

### Synopsis

Inserts new documents or replaces existing documents.

```
tigris replace {collection} {document}...|- [flags]
```

### Examples

```

  # Insert new documents
  tigris replace --project=myproj users '{"id": 1, "name": "John Wong"}'

  # Replace existing document
  # Existing document with the following data will get replaced
  #  {"id": 20, "name": "Jania McGrory"}
  tigris replace --project=myproj users '{"id": 20, "name": "Alice Alan"}'

  # Insert or replace multiple documents
  # Existing document with the following data will get replaced
  #  {"id": 20, "name": "Alice Alan"}
  #  {"id": 21, "name": "Bunny Instone"}
  # While the new document {"id": 19, "name": "New User"} will get inserted
  tigris replace --project=myproj users \
  '[
    {"id": 19, "name": "New User"},
    {"id": 20, "name": "Replaced Alice Alan"},
    {"id": 21, "name": "Replaced Bunny Instone"}
  ]'

```

### Options

```
  -b, --batch-size int32   set batch size (default 100)
      --branch string      Specifies branch: --branch=my_br1
  -h, --help               help for replace
  -p, --project string     Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
