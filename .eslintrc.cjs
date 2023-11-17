module.exports = {
    parser: "@babel/eslint-parser",
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "plugins": [ "react" ],
  "env": {
      "es6": true,
      "node": true
  },
 
  "parserOptions": {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env"],
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  babelOptions: {
    configFile: "path/to/config.js",
  },
  "settings": {
      "react": {
          "pragma": "React",
          "version": "detect"
      }
  },
  "rules": {
      "max-len": [1,1200,2,{"ignoreComments": true}],
      "no-console":[1],
      "no-unused-vars":[1],
      "react/jsx-uses-vars": [2],
      "no-loop-func":[1],
      "indent": [
          "error",
          "tab"
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
  },
  },
}