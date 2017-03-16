require('ignore-styles');
require('babel-register')({
  presets: [['env', { targets: { node: 'current' } }]]
});

global.document = require('jsdom').jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
