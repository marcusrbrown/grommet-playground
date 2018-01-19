import React, { Component } from 'react';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';

// TODO: Replace this with react-highlight after it supports React 16+.
// See: https://github.com/akiran/react-highlight/pull/43
export default class CodeHighlight extends Component {
  highlightCode() {
    const { className } = this.props;

    if (className) {
      const lang = className.replace('lang-', '');

      hljs.registerLanguage(lang, require(`highlight.js/lib/languages/${lang}`));
    }

    // The <code> element is preceded by a <pre> element, so query the <pre>.
    const nodes = this.el.parentNode.querySelectorAll('pre code');

    for (let i = 0; i < nodes.length; ++i) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  refEl = (el) => this.el = el;

  render() {
    const { className, children } = this.props;

    return (
      <code ref={this.refEl} className={className}>{children}</code>
    );
  }
}
