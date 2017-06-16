import * as actions from '../client/gallery/redux/actions';

describe('actions', () => {
    it('should create an action to change index', () => {
        const index = 666;
        const expectAction = {
            type: actions.SET_IMG_POS,
            index
        }
        expect(
            actions.setImgPos(index)
        ).toEqual(expectAction);
    })
    it('should create an action to add a image', () => {
        const img = 'https://123123123.jpg';
        const expectAction = {
            type: actions.ADD_IMG,
            path: img
        }
        expect(actions.addImg(img)).toEqual(expectAction);
    })
})