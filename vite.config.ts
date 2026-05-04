import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  base: "/Github-User/",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  server: {
    port: 3000,
  },
});
