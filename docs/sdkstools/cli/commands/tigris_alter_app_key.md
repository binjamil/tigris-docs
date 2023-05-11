---
id: alter-app-key
title: Alter App Key
slug: /sdkstools/cli/alter-app-key
---

Alter app_key credentials

```
tigris alter app_key {id} {name} {description} [flags]
```

### Examples

```

tigris alter app_key <client id> new_name1 "new descr1"

Output:
{
  "id": "<client id>",
  "name": "new_name1",
  "description": "new descr1",
  "secret": "<client secrete here",
  "created_at": 1663802082000,
  "created_by": "github|3436058"
}

```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -g, --global           App key is global. Can be used across projects. Suitable for automation.
  -h, --help             help for app_key
  -p, --project string   Specifies project: --project=my_proj1
  -r, --rotate           Rotate app key secret
```

### SEE ALSO

- [tigris alter](tigris_alter.md) - Alters collection
