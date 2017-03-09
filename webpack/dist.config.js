let path                = require("path"),
    webpack             = require("webpack"),
    config              = require("../gulp.config").app;

module.exports = {
    entry: {
        // Entry point os applications
        main: config.src.main_js,
        vendor: [
            "babel-polyfill",
            // "config",
            "react",
            "react-dom",
            "reakit"
        ]
    },

    output: {
        path: config.dest+"/assets/", // All is an assets
        publicPath: "/assets/", // For show images
        chunkFilename: "[chunkhash].js",
        filename: "[name].js"
    },

    module: {
        rules: [


            /****************************************
            * Config Stylus compilation
            ****************************************/
            { // Stylus compiler
                test: /\.styl$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {loader: "css-loader", options: {
                        modules: true,
                        sourceMap: true,
                        camelCase: true,
                        localIdentName: "[hash:base64:5]"
                    }},
                    {loader: "stylus-loader", options: {
                        preferPathResolver: "webpack"
                    }}
                ]
            },


            /****************************************
            * Config ES6/ES7 Transpiler - Babel
            ****************************************/
            { // Lint jsx files
                test: /.jsx?$/,
                enforce: "pre",
                exclude: /node_modules|lodash|config/,
                use: [
                    {loader: "eslint-loader", options: {
                        emitWarning: true
                    }}
                ]
            },

            { // Compile jsx files
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader", options: {
                        presets: ["env", "react"],
                        plugins: [
                            "autobind-class-methods",
                            "transform-class-properties",
                            "transform-export-extensions",
                            "add-module-exports"
                        ]
                    }}
                ]
            },

            { // Compile js files
                test: /.js?$/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader", options: {
                        presets: ["env"],
                        plugins: [
                            "autobind-class-methods",
                            "transform-class-properties",
                            "transform-export-extensions",
                            "add-module-exports"
                        ]
                    }}
                ]
            },


            /****************************************
            * Config images loader
            ****************************************/
            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: "url-loader", options: {
                        limit: 8192,
                        name: "images/[sha512:hash:base64:7].[ext]",
                        publicPath: "/assets/"
                    }}
                ]
            }
        ]
    },

    resolve: {
        modules: [
            path.resolve(__dirname, ".."),
            path.resolve(__dirname, "../src"),
            path.resolve(__dirname, "../src/app"),
            path.resolve(__dirname, "../node_modules")
        ],
        extensions: [".js",".jsx",".styl",".png",".jpg"]
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"],
            filename: "common.js",
            minChunks: Infinity
        })
    ]
}
