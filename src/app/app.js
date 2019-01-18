import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StyledApp from './App.styles';
import GlobalStyle from '../styles/Global';
import Header from '../layouts/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';

import Home from '../pages/Home';

/**
 * Code splitting with webpack prefetch (<link rel="prefetch" /> in index)
 *
 * @returns {Object} About
 */
const About = loadable(
  () => import(/* webpackPrefetch: true */ '../pages/About'),
  {
    fallback: <div>Loading...</div>,
  },
);

/**
 * Code splitting with webpack prefetch (<link rel="prefetch" /> in index)
 *
 * @returns {Object} Graph
 */
const Graph = loadable(
  () => import(/* webpackPrefetch: true */ '../pages/Graph'),
  {
    fallback: <div>Loading...</div>,
  },
);

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <StyledApp>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/graph" component={Graph} />
          </Switch>
        </div>
      </StyledApp>
    </ThemeProvider>
  </Router>
);

export default App;
