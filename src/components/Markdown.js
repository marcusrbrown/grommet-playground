import React from 'react';
import {Markdown as GrommetMarkdown} from 'grommet';
import {CodeHighlight} from './loadables';

const components = {
  code: {
    component: CodeHighlight,
  },
};

const Markdown = ({content}) => (
  <GrommetMarkdown components={components}>{content}</GrommetMarkdown>
);

export default Markdown;
