const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    // 静态文件目录
    contentBase: path.join(__dirname, 'www'), // 静态文件指向www文件夹
    // 不压缩
    compress: false,
    // 端口号
    port: 8080,
    // 虚拟打包路径，bundle.js文件没有真正生成
    publicPath: '/xuni/'
  }
};