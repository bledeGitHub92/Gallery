import 'styles/layout.css';
import { render } from 'react-dom';
import Main, { store } from './Main';
import { Provider } from 'react-redux';
import EventEmitter from 'events';
let emitter = new EventEmitter;

render(
    <Provider store={store}>
        <Main emitter={emitter} />
    </Provider>,
    document.getElementById('Gallery')
);