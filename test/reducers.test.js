import * as reducers from '../client/gallery/redux/reducers';
import { ADD_IMG, SET_IMG_POS } from '../client/gallery/redux/actions';

describe('reducers', () => {
    it('should return initial state of images', () => {
        expect(
            reducers.images(undefined, {})
        ).toEqual([]);
    })
    it('should return initial state of index', () => {
        expect(
            reducers.index(undefined, {})
        ).toEqual(0);
    })
    it('should handle ADD_IMG', () => {
        expect(
            reducers.images([], {
                type: ADD_IMG,
                path: 'http://foo.jpg'
            })
        ).toEqual(['http://foo.jpg'])
        expect(
            reducers.images(['http://bar.png'], {
                type: ADD_IMG,
                path: 'http://foo.jpg'
            })
        ).toEqual(['http://bar.png', 'http://foo.jpg'])
    });
    it('should handle SET_IMG_POS', () => {
        expect(
            reducers.index([], {
                type: SET_IMG_POS,
                index: 666
            })
        ).toEqual(666)
    });
});