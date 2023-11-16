import * as garn from "http://localhost:8777/mod.ts";

export const viteVanilla = garn.javascript
  .mkNpmProject({
    description: "An NPM project",
    src: ".",
    nodeVersion: "18",
  })
  .add(garn.javascript.vite)
  .add(garn.deployToGhPages((self) => self.build))
  .addExecutable("dev", "npm run dev")
  .addExecutable("preview", "npm run preview");
