import React, {Component} from 'react';
import {Anchor, Box, Grommet, Meter, Text} from 'grommet';
import {v1} from 'grommet-theme-v1';

class App extends Component {
  render() {
    return (
      <Grommet full={true} theme={v1}>
        <Box
          tag='header'
          direction='row'
          align='center'
          basis='xsmall'
          flex={false}
          pad={{horizontal: 'medium'}}
        >
          <Box direction='row' align='center'>
            <Text size='large'>Grommet Standalone</Text>
          </Box>
        </Box>
        <Box pad='medium'>
          <Meter
            background={{color: 'light-3', opacity: 'medium'}}
            values={[{color: 'accent-1', value: 40}]}
          />
        </Box>
        <Box tag='footer' direction='column' align='center' pad='small'>
          <p>
            Build your ideas with{' '}
            <Anchor href='https://grommet.io' target='_blank'>
              Grommet
            </Anchor>
            !
          </p>
        </Box>
      </Grommet>
    );
  }
}

export default App;
