/* eslint-disable new-cap */
const fsbx = require('fuse-box');
const fs = require('fs-extra');

const fb = new fsbx.FuseBox({
  homeDir: 'src/',
  outFile: 'dist/bundle.js',
  sourceMap: {
    bundleReference: 'sourcemaps.js.map',
    outFile: 'dist/sourcemaps.js.map',
  },
  plugins: [
    fsbx.CSSPlugin(),
    fsbx.BabelPlugin({
      config: {
        sourceMaps: true,
        presets: [
          ['env', {
            'targets': {
              'browsers': ['last 2 versions']
            }
          }],
          'react'
        ],
        plugins: [
          'transform-runtime',
          'transform-flow-strip-types'
        ]
      }
    })
  ]
});

fs.copySync('index.html', 'dist/index.html');
if (process.env.NODE_ENV === 'production') {
  fb.bundle('>main.js');
} else {
  fb.devServer('>main.js', { port: 8080 });
}
