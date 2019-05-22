module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js"
    },

    module: {
        rules: [{ //tablica w ktorej podajemy obiekty
            test: /\.js$/, // wszystkie pliki ktore bdmy importowac, jesli maja rozszrzenie js to powinien je
            // przepuscic przez loader ktory tutaj zdefiniujemy z wyjatkiem :
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }
        }]
    }
};