import React from 'react';
import {storiesOf} from '@storybook/react';
import {CodeBlock} from '../../components/loadables';

const testCode = `
import { Foo } from 'bar';

const baz = new Foo();

export default { baz };
`;

storiesOf('Playground: Components', module).add('CodeBlock', () => <CodeBlock code={testCode} />);
