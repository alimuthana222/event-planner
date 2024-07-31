import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/event-planner/", // Replace with your actual path
  plugins: [react()],
});