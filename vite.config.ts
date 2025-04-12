import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
    plugins: [
        react(),
        tsConfigPaths(),
        dts({
            include: ['src/'],
        }),
    ],
    build: {
        lib: {
            entry: resolve('src', 'index.ts'),
            name: 'KzAssets',
            formats: ['es', 'umd'],
            fileName: format => `kz-assets.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.dependencies)],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
}))
