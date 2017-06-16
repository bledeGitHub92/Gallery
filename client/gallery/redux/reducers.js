import { ADD_IMG, SET_IMG_POS } from './actions';

export function images(state = [], { type, path }) {
    switch (type) {
        case ADD_IMG:
            return [...state, path];
        default:
            return state;
    }
}

export function index(state = 0, { type, index }) {
    switch (type) {
        case SET_IMG_POS:
            return index;
        default:
            return state;
    }
}

// reducer -> 为了描述action如何改变state tree