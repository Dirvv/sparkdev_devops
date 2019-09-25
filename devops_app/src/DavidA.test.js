import React from 'react';
import ReactDOM from 'react-dom';
import DavidA from './DavidA';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DavidA />, div);
  ReactDOM.unmountComponentAtNode(div);
});
