module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-options',
    '@storybook/preset-create-react-app',
  ],
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: ['../src/stories/**/*.js'],
};
