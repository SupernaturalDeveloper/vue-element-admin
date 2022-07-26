const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置服务器，添加代理选项
  // devServer:开发 服务器
  devServer: {
    // 必须重启服务器，配置才能生效
    // proxy:代理
    proxy: {
      '/douyu': {
        // target：由服务器帮助到此域名中请求数据--代理
        target: 'http://jxsjs.com',
        changeOrigin: true, //代表 域名不同，需要提供代理模式
        // 路径重写：真正发送的请求地址中，要去掉 /douyu 开头
        pathRewrite: {
          // ^:正则中得字符串开头
          '^/douyu': '',
          // 如果不替换则发送的请求地址为：会多一个 /douyu
          // http://m.douyu.com/douyu/api/room/list?page=1
        },
      },
    },
  },
})
