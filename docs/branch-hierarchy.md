# Branch workflow

- **`dev`** is where contributors work. Fork the repository, make changes on a branch, and open a pull request to `dev`.
- **`main`** contains finalized, reviewed code. Changes are merged from `dev` to `main` when they are ready.
- **Production** runs from `main` and is deployed to the production VM.

**Flow:** feature branch or fork → pull request to `dev` → merge to `main` → deploy to production.