const express = require('express');
const next = require('next');

const envVars = require('../scripts/env');

const port = parseInt(process.env.PORT, 10) || 3001;
const env = process.env.NODE_ENV;
// const apiPrefix = envVars.BASE_API;
const dev = env !== 'production';

// const devProxy = {
//   [apiPrefix]: {
//     target: 'http://localhost:3000/',
//     pathRewrite: { [`^${apiPrefix}`]: '/api' },
//     changeOrigin: true,
//   },
// };

async function startApp() {
  const app = next({ dev });
  const handle = app.getRequestHandler();

  try {
    await app.prepare();

    const server = express();

    // if (dev && devProxy) {
    //   const proxyMiddleware = require('http-proxy-middleware');
    //   Object.keys(devProxy).forEach(function(context) {
    //     server.use(proxyMiddleware(context, devProxy[context]));
    //   });
    // }

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on port http://localhost:${port} [${env}]`);
    });
  } catch (err) {
    console.error(err.stack);
    process.exit(1);
  }
}

// startApp();

module.exports = startApp;
