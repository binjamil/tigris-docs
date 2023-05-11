---
id: invitation-create
title: Invitation Create
slug: /sdkstools/cli/invitation-create
---

Creates invitation(s)

### Synopsis

Creates invitations with provided email(s) and role(s)

```
tigris invitation create [flags]
```

### Examples

```
tigris invitation create --email welcome@example.com --role reader
```

### Options

```
  -e, --email strings   Email of the user to invite
  -h, --help            help for create
  -r, --role strings    Role of the user to invite
  -s, --sender string   Sender's name
```

### SEE ALSO

- [tigris invitation](tigris_invitation.md) - Invitation management commands
