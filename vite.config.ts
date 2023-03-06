import { BuildOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

const getBuildOptions = (bundle = false): BuildOptions => ({
  lib: {
    entry: resolve(__dirname, "src/lib/index.ts"),
    name: "ReactResponsiveness",
    formats: ["es", "umd"],
    fileName: `react-responsiveness${bundle ? ".bundle" : ""}`,
  },
  rollupOptions: {
    external: ["react", "react-dom"].concat(bundle ? [] : ["jotai"]),
    output: {
      globals: Object.assign(
        {},
        {
          react: "React",
          "react-dom": "ReactDom",
        },
        bundle ? {} : { jotai: "Jotai" }
      ),
    },
  },
});

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "ReactResponsiveness",
      formats: ["es", "umd"],
      fileName: (format) =>
        `react-responsiveness.${format}.${format === "umd" ? "c" : ""}js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "jotai"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          jotai: "jotai",
        },
      },
    },
  },
});
