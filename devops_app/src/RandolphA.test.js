import React from 'react';
import ReactDOM from 'react-dom';
import RandolphA from './RandolphA';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RandolphA />, div);
  ReactDOM.unmountComponentAtNode(div);
});
