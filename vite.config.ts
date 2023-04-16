import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import pregress from 'vite-plugin-progress';
import colors from 'picocolors';
import vitePluginImp from 'vite-plugin-imp';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        WindiCSS(),
        pregress({
            format: `${colors.yellow(colors.bold('building'))} ${colors.blue(
                '[:bar]',
            )} ${colors.cyan(':percent')}`,
            total: 200,
            width: 100,
        }),
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: (name) => `antd/es/${name}/style`,
                },
            ],
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    build: {
        terserOptions: {
            compress: {
                // 打包后移除console和注解
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:9999/shop/api/v1',
                secure: false,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
