---
id: create-project
title: Create Project
slug: /sdkstools/cli/create-project
---

Creates project

### Synopsis

This command will create a project. Optionally allows to bootstrap database and application code

```
tigris create project {name} [flags]
```

### Examples

```

	# Create Tigris project with no collections
	tigris create project

	# Create project and bootstrap collections from the schemaTemplate
	tigris create project --schema-template todo

	# Create project and scaffold application code using TypeSript and Express framework'
	tigris create project --framework=express

	# Both bootstrap collections and scaffold Express application
	tigris create project --schema-template todo --framework=express

	# Create project and create application code from the examples repository
	tigris create project --schema-template todo --framework=express

```

### Options

```
  -c, --components strings        Components of the project
      --create-env-file           Create .env file with Tigris connection credentials
  -e, --example string            Scaffold the project from the existing example
  -f, --framework string          Framework used for scaffolding
  -h, --help                      help for project
  -l, --language string           Language to Scaffold the project in. Possible values are: TypeScript, Golang, Java (default "typescript")
  -o, --output-directory string   Directory where to create the scaffolded application. The project name will be appended to this directory path (default ".")
  -n, --package-name string       Package name of the scaffolded project
  -s, --schema-template string    Database schema template to use
```

### SEE ALSO

- [tigris create](tigris_create.md) - Creates project, collection, namespace or app_key
