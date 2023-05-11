---
id: backup
title: Backup
slug: /sdkstools/cli/backup
---

Dumps documents and schemas to JSON files

### Synopsis

Dumps documents and schemas to JSON files into the directory specified in the argument.

    If a project name filter is provided it only dumps the schemas of the projects specified.
    Likewise, collection filters will limit the output to matching collection names.

```
tigris backup [filters] [flags]
```

### Options

```
  -C, --collections strings   limit data dump to specified collections
  -d, --directory string      destination directory for backups (default "./tigris-backup")
  -h, --help                  help for backup
  -P, --projects strings      limit data dump to specified projects
  -t, --timeout int           timeout specification in seconds (default 3600)
  -v, --verbose               verbose output
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
