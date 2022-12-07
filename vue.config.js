<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b3ef431 (no message)
module.exports = {
  productionSourceMap:false,
  // 關閉ESLINT校驗工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
};
<<<<<<< HEAD
=======
=======
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 關閉eslint
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {// 匹配所有以 '/api'開頭的請求路徑
        target: 'http://gmall-h5-api.atguigu.cn',// 獲取資料的目標位址
        changeOrigin: true,
      },
    }
  }
})
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
