import React from 'react';

import Collapsible from '../src/Collapsible';
import CollapsePane from '../src/CollapsePane';
import Title from '../src/Title';
import Content from '../src/Content';

import data1 from './data1';

describe('without nesting', () => {
  test('it renders correctly', () => {
    const wrapper = shallow(<Collapsible data={data1} />);
    expect(wrapper.find(CollapsePane).length).toBe(2);
  });
  describe('title and content has the correct content and styling', () => {
    const wrapper = mount(<Collapsible data={data1} />);
    test('first title has the correct classname', () => {
      expect(
        wrapper
          .find(CollapsePane)
          .find(Title)
          .at(0)
          .props().titleStyle
      ).toBe('titleStyle');
    });
    test('first content has the correct styling', () => {
      expect(
        wrapper
          .find(CollapsePane)
          .find(Content)
          .at(0)
          .props().contentStyle
      ).toEqual({ marginBottom: 20 });
    });
    test('click title should open up content or close the content', () => {
      wrapper
        .find(CollapsePane)
        .find(Title)
        .at(0)
        .simulate('click');
      expect(
        wrapper
          .find(CollapsePane)
          .find(Content)
          .at(0)
          .props().active
      ).toBe(true);
      wrapper
        .find(CollapsePane)
        .find(Title)
        .at(0)
        .simulate('click');
      expect(
        wrapper
          .find(CollapsePane)
          .find(Content)
          .at(0)
          .props().active
      ).toBe(false);
    });
    test('should render active content style when content is active', () => {
      expect(
        wrapper
          .find(CollapsePane)
          .find(Content)
          .at(0)
          .find('div')
          .at(0)
          .hasClass('content-active-bg-color-red')
      ).toBe(false);
      wrapper
        .find(CollapsePane)
        .find(Title)
        .at(0)
        .simulate('click');
      expect(
        wrapper
          .find(CollapsePane)
          .find(Content)
          .at(0)
          .find('div')
          .at(0)
          .hasClass('content-active-bg-color-red')
      ).toBe(true);
    });
  });
});