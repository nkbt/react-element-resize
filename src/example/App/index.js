import React from 'react';
import {ReactElementResize} from '../..';
import css from './App.css';


const App = () => (
  <div className={css.app}>
    <h1>react-element-resize</h1>
    <ReactElementResize
      debounceTimeout={200}
      onResize={({width, height}) => console.log({width, height})}>
      {({width, height}) =>
        <pre className={css.pre}>{JSON.stringify({width, height}, null, 2)}</pre>}
    </ReactElementResize>
  </div>
);


export default App;
