---
'@bossrodtv/create-app': major
---

## Major Change in React Repositories (react, next & react-native)

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
