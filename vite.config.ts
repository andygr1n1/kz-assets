import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

const packageName = (packageJson as { name?: string }).name ?? '@andygr1n1/kz-assets'
const packageSrcPath = `${packageName}/src/`

/** Normalize .d.ts paths: use relative (./) instead of package/src/. Published package only ships dist/, so package/src/ would not resolve. */
function normalizeDeclarationPaths(content: string): string {
    return content.split(packageSrcPath).join('./')
}

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
    plugins: [
        react(),
        tsConfigPaths(),
        dts({
            include: ['src/'],
            beforeWriteFile(filePath, content) {
                // Only normalize .d.ts files; leave .d.ts.map unchanged
                if (filePath.endsWith('.d.ts')) {
                    return { content: normalizeDeclarationPaths(content) }
                }
                return undefined
            },
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
