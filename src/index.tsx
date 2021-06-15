import React from 'react';
import ReactDOM from 'react-dom';

import { Foo } from './Foo';
import img from './tom.jpeg';

console.log(img);

const App = () => (
  <div>
    <h1>My React and TypeScript App!</h1>
    <Foo />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
