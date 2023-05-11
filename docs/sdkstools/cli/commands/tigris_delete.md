---
id: delete
title: Delete
slug: /sdkstools/cli/delete
---

Deletes document(s)

### Synopsis

Deletes documents according to the provided filter.

```
tigris delete {collection} {filter} [flags]
```

### Examples

```

  # Delete a user where the value of the id field is 2
  tigris delete --project=myproj users '{"id": 2}'

  # Delete users where the value of id field is 1 or 3
  tigris delete --project=myproj users '{"$or": [{"id": 1}, {"id": 3}]}'

```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -h, --help             help for delete
  -p, --project string   Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
