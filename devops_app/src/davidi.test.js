import React from 'react';
import ReactDOM from 'react-dom';
import DavidI from './davidi';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DavidI />, div);
  ReactDOM.unmountComponentAtNode(div);
});
