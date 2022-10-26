const { defineConfig } = require("@vue/cli-service");

const { name } = require("./package");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? `/micro/${name}` : "/",
  transpileDependencies: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 微应用配置
  configureWebpack: {
    output: {
      // library: `${name}-[name]`,
      // libraryTarget: "umd", // 把微应用打包成 umd 库格式
      library: {
        type: "umd",
        name: `${name}-[name]`,
      },
    },
  },
});
