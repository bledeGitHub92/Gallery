var React = require('react');
var ReactDOM = require('react-dom');
import NotesList from './components/hello.jsx';

ReactDOM.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
    </NotesList>,
    document.getElementById('example')
);