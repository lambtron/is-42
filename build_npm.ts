import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "@lambtron/is-42",
    version: Deno.args[0],
    description:
      "Boolean function that returns whether or not parameter is the number 42",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/lambtron/is-42.git",
    },
    bugs: {
      url: "https://github.com/lambtron/is-42/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
