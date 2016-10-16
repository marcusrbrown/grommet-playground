import React, { Component } from 'react';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';

class Main extends Component {
  render() {
    return (
      <App>
        <Header large justify="between" pad={{horizontal: 'medium'}}>
          <Title>Grommet Standalone</Title>
        </Header>
        <Box pad="medium">
          <Meter value={40} />
        </Box>
        <Footer primary appCentered direction="column" align="center" pad="small" colorIndex="grey-1">
          <p>Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!</p>
        </Footer>
      </App>
    );
  }
}

export default Main;
