---
id: insert
title: Insert
slug: /sdkstools/cli/insert
---

Inserts document(s)

### Synopsis

Inserts one or more documents into a collection.

```
tigris insert {collection} {document}...|- [flags]
```

### Examples

```

  # Insert a single document into the users collection
  tigris insert --project=myproj users '{"id": 1, "name": "Alice Alan"}'

  # Insert multiple documents into the users collection
  tigris insert --project=myproj users \
  '[
    {"id": 20, "name": "Jania McGrory"},
    {"id": 21, "name": "Bunny Instone"}
  ]'

  # Pass documents to insert via stdin
  # $ cat /home/alice/user_records.json
  # [
  #  {"id": 20, "name": "Jania McGrory"},
  #  {"id": 21, "name": "Bunny Instone"}
  # ]
  cat /home/alice/user_records.json | tigris insert --project=myproj users -

```

### Options

```
  -b, --batch-size int32   set batch size (default 100)
      --branch string      Specifies branch: --branch=my_br1
  -h, --help               help for insert
  -p, --project string     Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
