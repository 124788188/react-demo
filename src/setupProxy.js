const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:6789',
            changeOrigin: true,
            pathRewrite: { '^/api': '' }

        }),
        createProxyMiddleware('/otherApi', {
            target: 'http://localhost:6789',
            changeOrigin: true,
            pathRewrite: { '^/otherApi': '' }

        })
    );
};  