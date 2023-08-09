# webpack-keyword-parse-fail

`npm install`
`node_modules/.bin/webpack`
Fail: 
```
ERROR in ./app.js 8:26
Module parse failed: Unterminated regular expression (8:26)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|   }
|   function main() {
>     const bar = foo.if() / 2.0;
|     console.log(bar);
|   }
```
