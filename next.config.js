const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js');
const withLess = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');
const theme = require('./theme/theme.json');

const nextConfig = {};

const plugins = [
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@font-family': theme.fonts.primary,
        '@primary-color': theme.color.primary,
      },
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];
        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }
      return config;
    },
  }),
];

module.exports = withPlugins(plugins, nextConfig);
