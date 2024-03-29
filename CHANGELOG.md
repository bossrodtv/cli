# @bossrodtv/cli

## 1.5.1

### Patch Changes

- 77ffcff: Changes

  - Updated CI

## 1.5.0

### Minor Changes

- 657fc25: Changes

  - Updated README.md
  - Unmaintained templates removed
    - react
    - react-native
    - serverless-framework

## 1.4.0

### Minor Changes

- 92ebef5: Changes

  - Add sst template

## 1.3.4

### Patch Changes

- bce9c24: Changes

  - Renamed from create-app to cli

## 1.3.3

### Patch Changes

- c1dc57b: Changes

  - Enforce `pnpm` as the package manager.
  - Update trigger of github action.

## 1.3.2

### Patch Changes

- a6866c1: Changes

  - Updated README
  - Updated package.json scripts
  - Updated ci.yml
  - Updated clone scripts

## 1.3.1

### Patch Changes

- b6eb474: Updated README

  - [x] Updated the readme description

## 1.3.0

### Minor Changes

- 7741731: Fix

  - Removed templates from the cli package

## 1.2.1

### Patch Changes

- 1222f8e: Chore
  Updated template's readme

## 1.2.0

### Minor Changes

- 2f2fd86: Added templates folder

## 1.1.0

### Minor Changes

- a86066c: Enabled serverless-ts template.

## 1.0.2

### Patch Changes

- 61fd42f: Updated `README.md`
  Added `cspell` to check unknown words.

## 1.0.1

### Patch Changes

- 21a54dc: Updated README.md

## 1.0.0

### Major Changes

- b90d455: ## Major Change in React Repositories (react, next & react-native)

  1. Moved `src/shared/components/*` to `src/modules/*`. I realized that `Partial` and `Layouts` can be a module.
  2. Updated dev comments to know how some code works.
  3. Updated `src/shared/**/*` naming convention to `kebab-case` but still `PascalCase` for component folders/files.
  4. Updated environments config.
  5. Removed `styled-components`. (I'm gonna stick with TailwindCSS and CSS Module if necessary).
  6. Add assets `constants` and `utils`
  7. Add `helpers.ts` file to the `modules/*` folders.
  8. My rules (but still it depends on the user if they want to follow this rules):
     1. `shared/utils/*` - can be use across the repository. (function or class)
     2. `modules/helpers.ts` - can only be used within the `modules/*` and its module folder. (function or class)

## 0.1.0

### Minor Changes

- a7ea4e5: Update installation step removed frozen lockfile.

## 0.0.14

### Patch Changes

- d061382: Added additional option argument in install command

## 0.0.13

### Patch Changes

- 03457d6: Updated changeset

## 0.0.12

### Patch Changes

- e543ab1: Updated scripts

## 0.0.12

### Patch Changes

- 0e9809a: Updated release.yaml

## 0.0.11

### Patch Changes

- e8b2e20: Update changeset again!

## 0.0.10

### Patch Changes

- c3a0fab: Updated changeset
