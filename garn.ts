import * as garn from "https://garn.io/ts/v0.0.16/mod.ts";

export const viteVanilla = garn.javascript
  .mkNpmProject({
    description: "A vanilla vite project",
    src: ".",
    nodeVersion: "18",
  })
  .add(garn.javascript.vite)
  .add(garn.deployToGhPages((self) => self.build));
