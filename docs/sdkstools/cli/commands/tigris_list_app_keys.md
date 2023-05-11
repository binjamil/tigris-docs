---
id: list-app-keys
title: List App Keys
slug: /sdkstools/cli/list-app-keys
---

Lists app keys

### Synopsis

Lists available app keys. Optional parameter allows to return only the app key with the given name.

```
tigris list app_keys [name] [flags]
```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -g, --global           App key is global. Can be used across projects. Suitable for automation.
  -h, --help             help for app_keys
  -p, --project string   Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris list](tigris_list.md) - Lists projects, collections or namespaces
