import React from 'react';
import loadable from 'loadable-components';
import GrommetMarkdown from 'grommet/components/Markdown';

const CodeHighlight = loadable(() => import('./CodeHighlight'));

const components = {
  code: {
    component: CodeHighlight
  }
};

const Markdown = ({ content }) => (
  <GrommetMarkdown content={content} components={components} />
);

export default Markdown;
