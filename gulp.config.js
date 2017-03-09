let path = require('path');

module.exports = {
    app: {
        dest: path.resolve(__dirname, 'app'),

        src: {
            main_js: './src/main.jsx',
            html: './src/index.pug',
            js: ['./src/app/**/*.js', './src/app/**/*.jsx'],
        },

        vendor: {
            css: [],
            assets: []
        }
    }
}
