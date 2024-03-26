const {createProxyMiddleware:proxy} = require('http-proxy-middleware')
module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "https://localhost:9000",
      changeOrigin: true,
      pathRewrite: {
        '^/api':''
      },
    })
  );
}