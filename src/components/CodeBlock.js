// Based on CodeBlock.js found in the wix-storybook-utils package:
// https://github.com/wix/wix-ui/tree/master/packages/wix-storybook-utils

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown';

const toCodeBlock = (code, type) => [`\`\`\`${type}`, code.trim(), '```'].join('\n');

export default class CodeBlock extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'javascript',
  };

  render() {
    const {code, type} = this.props;

    return (
      <Fragment>
        <Markdown content={toCodeBlock(code, type)} />
      </Fragment>
    );
  }
}
