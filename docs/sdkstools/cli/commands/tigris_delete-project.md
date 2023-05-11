---
id: delete-project
title: Delete Project
slug: /sdkstools/cli/delete-project
---

Deletes project

### Synopsis

Deletes project and all resources inside project.

```
tigris delete-project {name} [flags]
```

### Examples

```

  # Delete project named 'test-project'
  tigris delete-project test-project'

  # Delete project named 'test-project' (without user prompt)
  tigris delete-project test-project' --force
#

```

### Options

```
  -f, --force   Skips user prompt and deletes the project
  -h, --help    help for delete-project
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
