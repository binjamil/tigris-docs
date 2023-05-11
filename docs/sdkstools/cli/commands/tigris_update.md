---
id: update
title: Update
slug: /sdkstools/cli/update
---

Updates document(s)

### Synopsis

Updates the field values in documents according to provided filter.

```
tigris update {collection} {filter} {fields} [flags]
```

### Examples

```

  # Update the field "name" of user where the value of the id field is 2
  tigris update --project=myproj users '{"id": 19}' '{"$set": {"name": "Updated New User"}}'

```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -h, --help             help for update
  -p, --project string   Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
