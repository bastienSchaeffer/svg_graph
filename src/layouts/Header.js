// @flow

// rafc
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import { elevation, fixed, primaryColor } from '../styles';
import { Heading, Grid, Col, Row, Button } from '../components/elements';
type HeaderProps = {
  className: string,
};

const Header = ({ className }: HeaderProps) => (
  <header className={className}>
    <Grid fluid>
      <Row>
        <Col xs={6}>
          <Heading level={1} size="lg" weight="bold" family="primary">
            SVG Data Processor
          </Heading>
        </Col>
        <Col xs={6}>
          <div className="navigation">
            <Button palette="secondary" size="lg">
              About
            </Button>
            <Button palette="secondary" size="lg">
              Create your SVG
            </Button>
            <Button palette="secondary" size="lg">
              Gallery
            </Button>
            <Button palette="secondary" size="lg">
              Contact
            </Button>
          </div>
        </Col>
      </Row>
    </Grid>
  </header>
);

export default styled(Header)`
  ${fixed()}
  z-index:2;
  background: ${primaryColor};
  width: 100%;
  color: white;
  ${elevation[2]};

  .navigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }
`;
