import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Box, Button} from 'grommet/components/Box';
import {Apps} from 'grommet-icons';

const commonProps = {
  label: 'Button',
  onClick: action('clicked'),
};

const stories = [
  {
    title: 'Default',
    render() {
      return <Button {...commonProps} />;
    },
  },
  {
    title: 'Primary',
    render() {
      return <Button {...commonProps} primary />;
    },
  },
  {
    title: 'Secondary',
    render() {
      return <Button {...commonProps} secondary />;
    },
  },
  {
    title: 'Accent',
    render() {
      return <Button {...commonProps} accent />;
    },
  },
  {
    title: 'Disabled',
    render() {
      return <Button label='Button' />;
    },
  },
  {
    title: 'Icon',
    render() {
      return <Button {...commonProps} label='' icon={<Apps />} />;
    },
  },
];

stories.forEach((story) => {
  storiesOf('Grommet: Button', module).add(story.title, () => (
    <Box align='center' direction='row'>
      {story.render()}
    </Box>
  ));
});
