import React from 'react';
import ReactDOM from 'react-dom';
import JuanC from './JuanC';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JuanC />, div);
  ReactDOM.unmountComponentAtNode(div);
});
