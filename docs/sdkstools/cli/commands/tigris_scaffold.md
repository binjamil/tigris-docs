---
id: scaffold
title: Scaffold
slug: /sdkstools/cli/scaffold
---

Scaffold new application for project

```
tigris scaffold [flags]
```

### Examples

```

	# Create Tigris project with no collections
	tigris scaffold --project=proj_name

	# Scaffold application code using TypeSript, Express framework' and existing collections schema
	tigris scaffold --project=proj_name --framework=express

	# Bootstrap collections from the schema template
	tigris scaffold --project=proj_name --schema-template todo

	# Both bootstrap collections and scaffold Express application
	tigris scaffold --project=proj_name --schema-template todo --framework=express

```

### Options

```
      --branch string             Specifies branch: --branch=my_br1
  -c, --components strings        Components of the project
  -e, --example string            Scaffold the project from the existing example
  -f, --framework string          Framework used for scaffolding
  -h, --help                      help for scaffold
  -l, --language string           Language to Scaffold the project in. Possible values are: TypeScript, Golang, Java (default "typescript")
  -o, --output-directory string   Directory where to create the scaffolded application. The project name will be appended to this directory path (default ".")
  -n, --package-name string       Package name of the scaffolded project
  -p, --project string            Specifies project: --project=my_proj1
  -s, --schema-template string    Database schema template to use
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
