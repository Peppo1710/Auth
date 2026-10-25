Use this professional commit message format:

```
[TYPE-SCOPE]: short description
```

### Commit types

| Type       | When to use                                | Example                                         |
| ---------- | ------------------------------------------ | ----------------------------------------------- |
| `FEAT`     | Add a new feature                          | `[FEAT-AUTH]: add JWT authentication`           |
| `FIX`      | Fix a bug                                  | `[FIX-AUTH]: resolve token validation error`   |
| `REFACTOR` | Restructure code without changing behavior | `[REFACTOR-USER]: simplify user service`        |
| `CHORE`    | Configuration, dependencies, maintenance  | `[CHORE-CONFIG]: update tsconfig`                |
| `DOCS`     | Documentation changes                      | `[DOCS-README]: add setup instructions`          |
| `TEST`     | Add or update tests                        | `[TEST-AUTH]: add login unit tests`             |
| `STYLE`    | Formatting only, no logic changes          | `[STYLE-SERVER]: format route handlers`         |
| `BUILD`    | Build system or compilation changes        | `[BUILD-TS]: configure TypeScript output`       |
| `CI`       | CI/CD pipeline changes                     | `[CI-GITHUB]: add test workflow`                |
| `PERF`     | Performance improvements                   | `[PERF-QUERY]: optimize database lookup`        |
| `INIT`     | Initial project setup                      | `[INIT-PROJECT]: create Express structure`      |

### Examples for file and folder changes

```
[CHORE-STRUCTURE]: create models and routes directories
[CHORE-CONFIG]: add tsconfig and package configuration
[FEAT-USER]: add user model
[REFACTOR-AUTH]: extract authentication middleware
[DOCS-API]: document user endpoints
```

### Rules to follow

1. Write the type and scope in uppercase inside one pair of square brackets.
2. Keep the description short and specific.
3. Use the scope to identify the affected module.
4. One commit should represent one logical change.
5. Use imperative wording: `add`, `update`, `remove`, `fix`.

My recommendation: Standardize on this format for your projects:

`[TYPE-SCOPE]: short description`

It is easy to read, works well with Git history, and keeps commits consistent across your team.