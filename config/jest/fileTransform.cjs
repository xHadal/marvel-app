/* eslint-disable no-undef */
"use strict";

const path = require("path");
const camelcase = require("camelcase");

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));

    if (filename.match(/\.svg$/)) {
      const pascalCaseFilename = camelcase(path.parse(filename).name, {
        pascalCase: true,
      });
      const componentName = `svg${pascalCaseFilename}`;
      return Promise.resolve({
        code: `const React = require('react');
        module.exports = {
          __esModule: true,
          default: ${assetFilename},
          ReactComponent: React.forwardRef(function ${componentName}(props, ref) {
            return {
              $$typeof: Symbol.for('react.element'),
              type: 'svg',
              ref: ref,
              key: null,
              props: Object.assign({}, props, {
                children: ${assetFilename}
              })
            };
          }),
        };`,
      });
    }

    return Promise.resolve({
      code: `module.exports = ${assetFilename};`,
    });
  },
};
