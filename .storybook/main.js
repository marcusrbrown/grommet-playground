/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-options',
    '@storybook/preset-create-react-app',
    '@storybook/addon-mdx-gfm',
  ],
  core: {
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  stories: ['../src/stories/**/*.js'],
  docs: {
    autodocs: true,
  },
};
export default config;
