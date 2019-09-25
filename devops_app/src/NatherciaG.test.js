import React from 'react';
import ReactDOM from 'react-dom';
import NatherciaG from './NatherciaG';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NatherciaG />, div);
  ReactDOM.unmountComponentAtNode(div);
});
