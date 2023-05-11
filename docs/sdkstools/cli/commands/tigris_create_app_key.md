---
id: create-app-key
title: Create App Key
slug: /sdkstools/cli/create-app-key
---

Create app_key credentials

### Synopsis

Creates new app_key credentials.
The output contains client_id and client_secret,
which can be used to authenticate using our official client SDKs.
Set the client_id and client_secret in the configuration of the corresponding SDK
Check the docs for more information: https://docs.tigrisdata.com/overview/authentication

```
tigris create app_key {name} {description} [flags]
```

### Examples

```

  tigris create app_key service1 "main api service"

  Output:

  {
    "id": "<client id here>",
    "name": "service1",
    "description": "main api service",
    "secret": "<client secret here",
    "created_at": 1663802082000,
    "created_by": "github|3436058"
  }

  tigris create app_key service2

  Output:

  {
    "id": "<client id here>",
    "name": "service2",
    "secret": "<client secret here",
    "created_at": 1663802082001,
    "created_by": "github|3436058"
  }

```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -g, --global           App key is global. Can be used across projects. Suitable for automation.
  -h, --help             help for app_key
  -p, --project string   Specifies project: --project=my_proj1
```

### SEE ALSO

- [tigris create](tigris_create.md) - Creates project, collection, namespace or app_key
