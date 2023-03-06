import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

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
        `react-responsiveness.${format !== "es" ? format + "." : ""}${
          format === "umd" ? "c" : ""
        }js`,
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
