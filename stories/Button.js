import React from 'react';
import Button from 'grommet/components/Button';
import { storiesOf, action } from '@kadira/storybook';

const stories = [
  {
    title: 'default',
    render() {
      return <Button label="Button" onClick={action('clicked')} />
    }
  }
];

stories.forEach(story => {
  storiesOf('Grommet: Button', module)
    .add(story.title, () => story.render());
});
