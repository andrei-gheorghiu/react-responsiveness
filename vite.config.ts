import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
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
