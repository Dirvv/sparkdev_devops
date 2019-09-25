import React from 'react';
import ReactDOM from 'react-dom';
import AndreM from './AndreM';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AndreM />, div);
  ReactDOM.unmountComponentAtNode(div);
});
