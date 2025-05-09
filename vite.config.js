import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/employee/", // Replace this with your repo name if different
  plugins: [react()],
});
