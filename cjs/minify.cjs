'use strict';

var terser$1 = require('terser');
var rollupPluginYourFunction = require('rollup-plugin-your-function');

const terser = () => rollupPluginYourFunction.yourFunction({
    output: true,
    name: "terser",
    fn: async (source, options) => terser$1.minify(
        source,
        {
            module: (/^esm?$/).test(options.outputOptions.format),
            toplevel: options.outputOptions.format === "cjs",
            sourceMap: true
        }
    )
});

exports.terser = terser;
//# sourceMappingURL=minify.cjs.map
