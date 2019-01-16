// @flow
import React from 'react';
import './app.css';
import logo from '../images/logo.svg';
import Button from '../components/Button';

// define the button text and give it a type of string
const buttonText: string = 'Button label';

const App = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} alt="Bastien Schaeffer" />
      <h1 className="app-title">Webpack React boilerplate</h1>
      <p>The color of this page is: white</p>
      <p>
        Flow:
        https://medium.com/@joshuacrass/type-checking-with-flow-react-babel-and-webpack-290cbf4cd4b3
      </p>
      <p>
        docker build -t build-monitor docker/
        docker run -p 5000:5000 build-monitor
        docker run -it build-monitor sh
      </p>
      <Button>{buttonText}</Button>
    </header>
  </div>
);

export default App;
