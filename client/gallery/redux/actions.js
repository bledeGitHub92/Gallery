export const ADD_IMG = 'ADD_IMG';
export const SET_IMG_POS = 'SET_IMG_POS';

export function addImg(path) {
    return { type: ADD_IMG, path }
}
export function setImgPos(index) {
    return { type:SET_IMG_POS, index }
}

// action -> 是一个用于描述已发生事件的普通对象