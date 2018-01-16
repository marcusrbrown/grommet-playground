import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';

function loadStories() {
  require('../src/stories');
}

addDecorator(story => (
  <App centered={false}>
    <Article primary pad="large" align="center">
      <Box pad="large" direction="row" align="center">
        {story()}
      </Box>
    </Article>
  </App>
));

configure(loadStories, module);
