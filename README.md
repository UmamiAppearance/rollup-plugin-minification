# rollup-plugin-minification

This is an emergency replacement for [rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser) which is currently not in active development.

There is an official solution for the terser plugin on the way, as it is going to be part of the [rollup plugins repository](https://github.com/rollup/plugins). Until it is available you can use this plugin as a 1:1 replacement for **rollup-plugin-terser**. 

## Installation
```console
npm i rollup-plugin-minification -D
```

## Usage
**rollup config:**
```js
//import { terser } from "rollup-plugin-terser";
import { terser } from "rollup-plugin-minification";
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022, UmamiAppearance
