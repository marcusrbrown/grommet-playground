const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (storybookBaseConfig, env) => {
  const config = genDefaultConfig(storybookBaseConfig, env);

  config.module || (config.module = {});
  config.module.rules || (config.module.rules = []);

  config.module.rules = [
    ...config.module.rules
      .filter(r => !r.test || r.test.source !== '\\.md$'),
    {
      test: /\.md$/,
      loader: 'raw-loader'
    }
  ];

  return config;
};
