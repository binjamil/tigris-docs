---
id: restore
title: Restore
slug: /sdkstools/cli/restore
---

restores documents and schemas from JSON files

### Synopsis

restores documents and schemas from JSON files in a directory specified in the argument.

    If a database filter is provided it only restores the schemas of the databases specified.
    Likewise, collection filters will limit the input to matching collection names.

    SYNOPSIS

    Restore all the data and schema with the same name as they were captured:
    $ tigris restore -d /path/to/backup

    Restore a single project called mydb:
    $ tigris restore -d /path/to/backup -P mydb

    Restore mydb project under the name mydb_restored:
    $ tigris restore -d /path/to/backup -P mydb -e restored

    Restore mydb as restored.mydb:
    $ tigris restore -d /path/to/backup -P mydb -b restored -s '.'

```
tigris restore [filters] [flags]
```

### Options

```
  -C, --collections strings   limit data restore to specified collections
  -d, --directory string      input file directory (default "./tigris-backup")
  -h, --help                  help for restore
  -e, --postfix string        postfixes restored database names
  -b, --prefix string         prefixes restored database names
  -P, --projects strings      limit data restore to specified projects
  -s, --separator string      separator to use for pre and postfixes (default "_")
  -t, --timeout int           timeout specification in seconds (default 3600)
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
