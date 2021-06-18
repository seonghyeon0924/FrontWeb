const { createProxyMiddleware } =  require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://49.50.161.97:8888',
            changeOrigin: true,
        })
    );
};