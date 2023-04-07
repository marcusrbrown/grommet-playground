import React from 'react';
import {setOptions} from '@storybook/addon-options';
import {Box} from 'grommet';
import Package from '../package.json';

/** @type {import('@storybook/react').Preview} */
const preview = {
  decorators: [
    (story) => (
      <Box tag='article' basis='auto' pad='none'>
        <Box pad='large'>{story()}</Box>
      </Box>
    ),
  ],
  parameters: {
    backgrounds: [
      {name: 'light', value: '#ffffff', default: true},
      {name: 'dark', value: '#000000'},
    ],
  },
};

export default preview;

setOptions({
  name: `${Package.name} ${Package.version}`,
  url: Package.repository.url,
});
