# react-element-resize [![npm](https://img.shields.io/npm/v/react-element-resize.svg?style=flat-square)](https://www.npmjs.com/package/react-element-resize)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/react-element-resize.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/nkbt/react-element-resize)
[![AppVeyor](https://img.shields.io/appveyor/ci/nkbt/react-element-resize.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/nkbt/react-element-resize)
[![Coverage](https://img.shields.io/codecov/c/github/nkbt/react-element-resize.svg?style=flat-square)](https://codecov.io/github/nkbt/react-element-resize?branch=master)
[![Dependencies](https://img.shields.io/david/nkbt/react-element-resize.svg?style=flat-square)](https://david-dm.org/nkbt/react-element-resize)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/react-element-resize.svg?style=flat-square)](https://david-dm.org/nkbt/react-element-resize#info=devDependencies)

Element resize sensor with optional debounce

## Installation

### NPM
```sh
npm install --save react react-element-resize
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://npmcdn.com/react-element-resize/bower.zip
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://npmcdn.com/react-element-resize/build/react-element-resize.js"></script>
(Module exposed as `ReactElementResize`)
```


## Demo

[http://nkbt.github.io/react-element-resize](http://nkbt.github.io/react-element-resize)

## Codepen demo

```js
// TODO
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {ReactElementResize} from 'react-element-resize';

const App = () => (
  <ReactElementResize
    debounceTimeout={200}
    onResize={({width, height}) => console.log({width, height})}>
    {({width, height}) => <pre >{JSON.stringify({width, height}, null, 2)}</pre>}
  </ReactElementResize>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options

```js
// TODO
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 6` on `OSX` and `Windows`.

To run example covering all `ReactElementResize` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-element-resize.git
cd react-element-resize
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
