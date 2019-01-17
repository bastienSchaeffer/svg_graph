// @flow
import React from 'react';
import StyledApp from './App.styles';
import GlobalStyle from '../styles/Global';
import Header from '../layouts/Header';
import { ThemeProvider } from 'styled-components';
import { Table, Button, Heading, Grid, Col, Row } from '../components/elements';
import { theme } from '../styles';
import LineChart from '../components/graphs/LineChart';
import BarChart from '../components/graphs/BarChart';
import Arc from '../components/graphs/ArcReactVis';
// import { Grid, Col, Row } from 'react-styled-flexboxgrid';

console.log(theme);

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledApp>
      <GlobalStyle />
      <Header />

      <main>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Heading level={1} size="lg" weight="bold">
                Build your data
              </Heading>
              <hr />
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <BarChart />
            </Col>
            <Col xs={12} md={6}>
              <LineChart />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <Arc />
            </Col>
            <Col xs={12} md={6}>
              <Arc />
            </Col>
            <Col xs={12}>
              <hr />
              <br />
              <br />
              <Table>
                <tr>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
              </Table>
              <p>
                Level gives the h tag number, whereas the size modify the
                font-size
              </p>
              <Button palette="primary" size="md">
                Display the graph
              </Button>
              <Button palette="secondary" size="md">
                Adjust data
              </Button>
              <hr />
              <br />
              <Table>
                <tr>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
              </Table>
              <p>
                Level gives the h tag number, whereas the size modify the
                font-size
              </p>
              <Button palette="primary" size="md">
                Display the graph
              </Button>
              <Button palette="secondary" size="md">
                Adjust data
              </Button>
              <hr />
            </Col>
          </Row>
        </Grid>
      </main>
    </StyledApp>
  </ThemeProvider>
);

export default App;
