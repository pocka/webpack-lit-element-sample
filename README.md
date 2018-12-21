# webpack-lit-element-sample

Sample repository for WebComponents project using [lit-element](https://github.com/polymer/lit-element) with [Webpack](https://github.com/webpack/webpack) works on ES5~ environment.

## Prerequiements

- Node.js (recommend to use [nvm](https://github.com/creationix/nvm))
- [yarn](https://github.com/yarnpkg/yarn)

## How to start

```sh
$ yarn
$ yarn dev
```

Then visit <http://localhost:3000>!

## How to build

```sh
yarn build
```

This will create `dist` directory.
If you check bundled app, please run below.

```sh
yarn serve
```

This will serve contents under dist on <http://localhost:8080>.

## Things you should care

- If you transpile WebComponents code into ES5 by babel,
  you need to set [`babel-plugin-transform-builtin-classes`](https://www.npmjs.com/package/babel-plugin-transform-builtin-classes) plugin and add `"LitElement"`(when you use `lit-element`) or `"HTMLElement"`(when you extend native `HTMLElement`) to `<pluginOption>.globals` in Babel config. You can see it in this repository at `babel.plugins` in [`package.json`](./package.json).
- lit-element is not a stable.
- There are [known](https://github.com/polymer/lit-element#known-issues) [issues](https://github.com/webcomponents/webcomponentsjs#known-issues).
- This is unofficial sample repository :smirk_cat:
