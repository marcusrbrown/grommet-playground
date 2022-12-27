import React from 'react';
import {addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import {Box} from 'grommet';
import Package from '../package.json';

addDecorator((story) => (
  <Box tag='article' basis='auto' pad='none'>
    <Box pad='large'>{story()}</Box>
  </Box>
));

setOptions({
  name: `${Package.name} ${Package.version}`,
  url: Package.repository.url,
});
