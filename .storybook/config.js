import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';

function loadStories() {
  require('../src/stories');
}

addDecorator(story => (
  <Article primary pad="large" align="center">
    <Box pad="large" direction="row" align="center">
      {story()}
    </Box>
  </Article>
));

configure(loadStories, module);
