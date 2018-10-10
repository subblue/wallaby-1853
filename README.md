# Jest/wallaby testing issue

Install all modules with `yarn`, which will also copy the @kpvlab/color-utils folder into the
node_modules diretory to simulate a private module install.

The @kpvlab/color-utils package is written in ES6 and so should be transiled by babel.  
Jest will do this since the `transformIgnorePatterns` is set to ignore all node_modules apart from
the @kpvlab ones.

Running `yarn test` works as expected, however running Wallaby throws the error:

```
Jest encountered an unexpected token​​
​​​​
​​This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.​​
​​​​
​​By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".​​
​​​​
​​Here's what you can do:​​
​​ • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.​​
​​ • If you need a custom transformation specify a "transform" option in your config.​​
​​ • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.​​
​​​​
​​You'll find more details and examples of these config options in the docs:​​
​​https://jestjs.io/docs/en/configuration.html​​
​​​​
​​Details:​​
​​​​
​​/Users/tom/Github/wallaby-1853/node_modules/@kpvlab/color-utils/color-utils.js:1​​
​​({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){export function wallabyTest(num) {​​
​​                                                                                         ^^^^^^​​
​​​​
​​SyntaxError: Unexpected token export​​
  at Object.require ​src/some/__tests__/a-test.js:2​
```
