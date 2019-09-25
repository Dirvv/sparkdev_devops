import React from 'react';
import ReactDOM from 'react-dom';
import William from './William';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<William />, div);
  ReactDOM.unmountComponentAtNode(div);
});
