import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  mimeTypes: {
    // Add the MIME type for the disallowed file extension
    "text/html": ["md"],
  },
});
