import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/task-manager-frontend',
  plugins: [react(), jsconfigPaths()],
});
