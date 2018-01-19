import React from 'react';
import loadable from 'loadable-components';
import { storiesOf } from '@storybook/react';
import README from '../../README.md';
import LICENSE from '../../LICENSE.md';

const Markdown = loadable(() => import('../components/Markdown'));

storiesOf('Playground', module)
  .add('README', () => (<Markdown content={README} />))
  .add('LICENSE', () => (<Markdown content={LICENSE} />));
