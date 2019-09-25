import React from 'react';
import ReactDOM from 'react-dom';
import DavidR from './DavidR';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DavidR />, div);
  ReactDOM.unmountComponentAtNode(div);
});