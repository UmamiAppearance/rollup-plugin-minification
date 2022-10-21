/**
 * [rollup-plugin-minification]{@link https://github.com/UmamiAppearance/minification}
 *
 * @version 0.1.0
 * @author UmamiAppearance [mail@umamiappearance.eu]
 * @license MIT
 */


import { createFilter } from "@rollup/pluginutils";
import { minify } from "terser";
import { yourFunction } from "rollup-plugin-your-function";

const terser = (options={}) => {

    const filter = createFilter(settings.include, settings.exclude);

    return {
        name: "minify",

        renderChunk: async (source, chunk, outputOptions, meta) => {
            
            
            return await minify(
                source,
                {
                    module: (/^esm?$/).test(options.outputOptions.format),
                    toplevel: options.outputOptions.format === "cjs",
                    sourceMap: true
                }
            );
        },

    };

};



const terserOrig = () => yourFunction({
    output: true,
    name: "terser",
    fn: async (source, options) => minify(
        source,
        {
            module: (/^esm?$/).test(options.outputOptions.format),
            toplevel: options.outputOptions.format === "cjs",
            sourceMap: true
        }
    )
});

export { terser };
