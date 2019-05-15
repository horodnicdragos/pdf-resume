// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-transform-react-jsx"]
});

module.exports = require('./main.js')
