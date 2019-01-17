import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Grid, Col, Row } from './Grid';
import Heading from '../Heading/Heading';

storiesOf('Elements', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      source: false,
      propTablesExclude: [Heading],
    }),
  )
  .add('Grid', () => (
    <div>
      <div>
        <Heading level={1} size="lg" family="primary" weight="bold">
          Grid
        </Heading>
        <p>
          The grid is using the react-styled-flexboxgrid, to see all available
          property, please refer to{' '}
          <a href="https://github.com/LoicMahieu/react-styled-flexboxgrid">
            the official documentation
          </a>
        </p>
        <hr />
        <h2>Examples</h2>
        <br />
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} palette="primaryColor">
              xs={12} sm={6} md={4} lg={3}
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} palette="secondaryColor">
              xs={12} sm={6} md={4} lg={3}
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} palette="primaryColor">
              xs={12} sm={6} md={4} lg={3}
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} palette="secondaryColor">
              xs={12} sm={6} md={4} lg={3}
            </Col>
          </Row>
        </Grid>
        <br />
        <Grid fluid>
          <Row>
            <Col mdOffset={10} md={2} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={9} md={3} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={8} md={4} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={7} md={5} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={6} md={6} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={5} md={7} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={4} md={8} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={3} md={9} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={2} md={10} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={1} md={11} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
            <Col mdOffset={0} md={12} palette="primaryColor">
              mdOffset={11} md={1}
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  ));
