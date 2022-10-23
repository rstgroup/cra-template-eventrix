import React from 'react';
import logo from '../../logo.svg';
import { Counter } from '../../components/counter/Counter';

const HomePage = () => (
    <div className="home">
        <img src={logo} className="logo" alt="logo"/>
        <Counter/>
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
              className="link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
              className="link"
              href="https://eventrix.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            Eventrix
          </a>
        </span>
    </div>
)

export default HomePage;