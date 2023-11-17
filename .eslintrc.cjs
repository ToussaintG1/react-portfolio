module.exports = {
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "plugins": [ "react" ],
  "env": {
      "es6": true,
      "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
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
      ]
  }
}