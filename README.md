# rollup-plugin-minification

Right now this is an emergency replacement for [rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser) which is currently not in active development. As this name _minification_ suggests this plugin will not be bound to terser. If it will be necessary to replace the underlying minification (which will not be the case as long as terser is in active development), the more generic name of this plugin makes it possible to do that without producing a misleading name.

The next steps will be to turn this into a real plugin while keeping it compatible with **rollup-plugin-terser**.

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
