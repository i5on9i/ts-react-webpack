## Installation

	c:..> npm install



## Run webpack twice

When you run webpack.cmd, you would see the Error like below, that is because the *.d.ts file is generated after the tsc has been run.

 - [GitHub \- Jimdo/typings\-for\-css\-modules\-loader: Drop\-in replacement for css\-loader to generate typings for your CSS\-Modules on the fly in webpack](https://github.com/Jimdo/typings-for-css-modules-loader#typescript-doesnt-find-the-typings)

 Thus, you should run twice.

```
c:\ts-react-webpack> .\node_modules\.bin\webpack.cmd
...
ERROR in [at-loader] ./src/components/Hello.tsx:2:25
    TS2307: Cannot find module './sty.css'.
```

## How to use typings-for-css-modules-loader

### import in .ts

In the .tsx source, you should use the following syntax for ```typings-for-css-modules-loader``` to generate the *.d.ts files.

```
import * as Styles from './sty.css';
```

### namedExport webpack option

without namedExport, ```typings-for-css-modules-loader``` generates wrong *.d.ts file which has interface.

- 
[GitHub \- Jimdo/typings\-for\-css\-modules\-loader: Drop\-in replacement for css\-loader to generate typings for your CSS\-Modules on the fly in webpack](https://github.com/Jimdo/typings-for-css-modules-loader#namedexport-option)

```
 module: {
    rules: [
      { 
        test: /\.css$/,
        use:[
          {
            loader: 'style-loader'
          },
          {
            // loader: 'css-loader',
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              namedExport: true,
              // camelCase: true,
            }
          }
        ],
      },
```