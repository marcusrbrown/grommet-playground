import React from 'react';
import loadable from 'loadable-components';
import { storiesOf } from '@storybook/react';

const CodeBlock = loadable(() => import('../../components/CodeBlock'));

const testCode = `
import { Foo } from 'bar';

const baz = new Foo();

export default { baz };
`;

storiesOf('Playground: Components', module)
  .add('CodeBlock', () => (
    <CodeBlock code={testCode} />
  ));
