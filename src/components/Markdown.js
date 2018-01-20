import React from 'react';
import GrommetMarkdown from 'grommet/components/Markdown';
import { CodeHighlight } from './loadables';

const components = {
  code: {
    component: CodeHighlight
  }
};

const Markdown = ({ content }) => (
  <GrommetMarkdown content={content} components={components} />
);

export default Markdown;
