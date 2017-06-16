import React from 'react';
import { shallow } from 'enzyme';
import ImageInfo from '/components/ImageInfo';


describe('ImageInfo', () => {
    const { props, enzymeWrapper } = setup();
    it('should render dt dd p', () => {
        expect(enzymeWrapper.find('dt').text()).toEqual('this is a dt');
        expect(enzymeWrapper.find('dd').text()).toEqual('this is a dd');
        expect(enzymeWrapper.find('p').text()).toEqual('this is a p');
    });
})

function setup() {
    const props = {
        dt: 'this is a dt',
        dd: 'this is a dd',
        p: 'this is a p'
    }
    const enzymeWrapper = shallow(<ImageInfo {...props} />);
    return {
        props,
        enzymeWrapper
    }
}