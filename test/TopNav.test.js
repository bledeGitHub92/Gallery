import TopNav from '/components/TopNav';
import { shallow } from 'enzyme';
import React from 'react';

describe('TopNav', () => {
    const { props, enzymeWrapper } = setup();
    it('class should be topNav & hidden', () => {
        const { enzymeWrapper } = setup({
            location: { pathname: '/' },
        });
        expect(enzymeWrapper.find('div').hasClass('topNav hidden')).toBe(true);
    });
    it('class should be topNav', () => {
        const { enzymeWrapper } = setup({
            location: { pathname: '/foo' }
        });
        expect(enzymeWrapper.find('div').hasClass('topNav')).toBe(true);
    });
    it('style of width should be 666px', () => {
        const { enzymeWrapper } = setup({
            width: '666px'
        });
        expect(enzymeWrapper.find('ul').prop('style').width).toEqual('666px');
    });
    it('class should be menuToggle', () => {
        expect(enzymeWrapper.find('li').hasClass('menuToggle')).toBe(true);
    });
    it('should call onTopNavClick', () => {
        enzymeWrapper.find('.menuToggle').simulate('click');
        expect(props.onTopNavClick.mock.calls.length).toBe(1);
    });
})

function setup(props) {
    props = {
        ...props,
        onTopNavClick: jest.fn(),
    }
    const enzymeWrapper = shallow(<TopNav {...props} />);
    return {
        props,
        enzymeWrapper
    }
}