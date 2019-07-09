import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('validates', () => {
    const wrapper = mount(<App />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find(".status")).toHaveLength(1);
    expect(wrapper.find(".status").prop("className")).toMatch(/\binvalid/)
});
