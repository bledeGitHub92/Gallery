import React from 'react';
import { shallow } from 'enzyme';
import CloseButton from '/components/CloseButton';

describe('CloseButton', () => {
    const { props, enzymeWrapper } = setup();
    it('should call onCloseButtonClick', () => {
        enzymeWrapper.find('.closeButton').simulate('click');
        expect(props.onCloseButtonClick.mock.calls.length).toBe(1);
    });
});

function setup() {
    const props = {
        onCloseButtonClick: jest.fn()
    }
    const enzymeWrapper = shallow(<CloseButton {...props} />);
    return {
        props,
        enzymeWrapper
    }
}