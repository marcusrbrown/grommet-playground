import loadable from 'loadable-components';

const CodeBlock = loadable(() => import('./CodeBlock'));
const CodeHighlight = loadable(() => import('./CodeHighlight'));
const Markdown = loadable(() => import('./Markdown'));

export {
  CodeBlock,
  CodeHighlight,
  Markdown,
};
