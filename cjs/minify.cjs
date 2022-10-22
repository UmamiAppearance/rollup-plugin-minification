'use strict';

var terser$1 = require('terser');

/**
 * [rollup-plugin-minification]{@link https://github.com/UmamiAppearance/minification}
 *
 * @version 0.2.0
 * @author UmamiAppearance [mail@umamiappearance.eu]
 * @license MIT
 */

const terser = (options={}) => {

    return {
        name: "minification",

        async renderChunk(code, chunk, outputOptions) {
            
            const defaultOptions = {
                sourceMap:
                    Boolean(outputOptions.sourcemap) ||
                    Boolean(outputOptions.sourceMap),
                module: 
                    (/^esm?$/).test(outputOptions.format),
                toplevel:
                    outputOptions.format === "cjs"  
            };

            options = {
                ...defaultOptions,
                ...options
            };

            const result = await terser$1.minify(
                code,
                options
            );

            if (result.nameCache) {
                let { vars, props } = options.nameCache;
    
                // only assign nameCache.vars if it was provided, and if terser produced values:
                if (vars) {
                    const newVars = result.nameCache.vars && result.nameCache.vars.props;
                    if (newVars) {
                        vars.props = vars.props || {};
                        Object.assign(vars.props, newVars);
                    }
                }
    
                // support populating an empty nameCache object:
                if (!props) {
                    props = options.nameCache.props = {};
                }
    
                // merge updated props into original nameCache object:
                const newProps =
                result.nameCache.props && result.nameCache.props.props;
                if (newProps) {
                    props.props = props.props || {};
                    Object.assign(props.props, newProps);
                }
            }

            return result.code;
        },
    };

};

exports.terser = terser;
//# sourceMappingURL=minify.cjs.map
