import React from 'react';
import {storiesOf} from '@storybook/react';
import {Markdown} from '../components/loadables';
import readme from '../../readme.md';
import license from '../../license.md';

storiesOf('Playground', module)
  .add('readme', () => <Markdown content={readme} />)
  .add('license', () => <Markdown content={license} />);
