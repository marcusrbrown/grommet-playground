import React from 'react';
import {storiesOf} from '@storybook/react';
import {Markdown} from '../components/loadables';
import README from '../../README.md';
import LICENSE from '../../LICENSE.md';

storiesOf('Playground', module)
  .add('README', () => <Markdown content={README} />)
  .add('LICENSE', () => <Markdown content={LICENSE} />);
