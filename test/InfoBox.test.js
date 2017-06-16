import React from 'react';
import { shallow } from 'enzyme';
import InfoBox from '/components/InfoBox';

describe('InfoBox', () => {
    const { props, enzymeWrapper } = setup();
    it('class should be infoBox', () => {
        expect(enzymeWrapper.find('div').hasClass('infoBox')).toBe(true);
    })
    it('style of display should be block', () => {
        const { enzymeWrapper } = setup({ isShow: true });
        expect(enzymeWrapper.find('div').prop('style').display).toEqual('block');
    })
    it('style of display should be none', () => {
        const { enzymeWrapper } = setup({ isShow: false });
        expect(enzymeWrapper.find('div').prop('style').display).toEqual('none');
    })
    it('path of thumbnail should be /foo', () => {
        expect(enzymeWrapper.find('ThumbNail').prop('path')).toEqual('/foo');
    });
    it('should contain ImageInfo', () => {
        expect(enzymeWrapper.find('ImageInfo')).toHaveLength(1);
    })
})

function setup(props) {
    props = {
        ...props,
        brief: { path: '/foo' }
    }
    const enzymeWrapper = shallow(<InfoBox {...props} />)
    return {
        props,
        enzymeWrapper
    }
}