const path = require("path");
module.exports = {
    publicPath: "./",
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'my project',
        }
    },
    configureWebpack: {
        resolve: {extensions: [".ts", ".tsx", ".js", ".json"]},
        module: {
            rules: [
                {test: /\.ts$/, loader: "ts-loader"},
                {test: /\.md$/, loader: "markdown-loader"},
            ],
        },
        resolveLoader: {
            modules: [
                path.resolve(__dirname),
            ]
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7788',
                ws: true,
                changeOrigin: true
            },
        }
    }
}