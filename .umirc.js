const path = require('path');

export default {
  publicPath: 'http://cdn.com/foo',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'voice-demo',
      hardSource: false,
      dll:false
    }],
  ],
  disableCSSModules:true,
  disableCSSSourceMap:true
}

