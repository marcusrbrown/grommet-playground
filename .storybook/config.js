import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Package from '../package.json';

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

setOptions({
  name: `${Package.name} ${Package.version}`,
  url: Package.repository.url
});

configure(loadStories, module);
