---
id: transact
title: Transact
slug: /sdkstools/cli/transact
---

Executes a set of operations in a transaction

### Synopsis

Executes a set of operations in a transaction.
All the read, write and schema operations are supported.

```
tigris transact {operation}...|- [flags]
```

### Examples

```

  # Perform a transaction that inserts and updates in three collections
  tigris tigris transact myproj \
  '[
    {
      "insert": {
        "collection": "orders",
        "documents": [{
          "id": 1, "user_id": 1, "order_total": 53.89, "products": [{"id": 1, "quantity": 1}]
        }]
      }
    },
    {
      "update": {
        "collection": "users", "fields": {"$set": {"balance": 5991.81}}, "filter": {"id": 1}
      }
    },
    {
      "update": {
        "collection": "products", "fields": {"$set": {"quantity": 6357}}, "filter": {"id": 1}
      }
    }
  ]'

```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -h, --help             help for transact
  -p, --project string   Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
