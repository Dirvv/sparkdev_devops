import React from 'react';
import ReactDOM from 'react-dom';
import MauricioS from './MauricioS';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MauricioS />, div);
  ReactDOM.unmountComponentAtNode(div);
});
