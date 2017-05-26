import React from 'react';

export default class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            text: ''
        }
    }
    render() {
        return (
            <div className="commentForm">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.author}
                        onChange={e => this.handleAuthorChange(e)}
                    />
                    <input
                        type="text"
                        placeholder="Say something..."
                        value={this.state.text}
                        onChange={e => this.handleTextChange(e)}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
    handleAuthorChange(e) {
        this.setState(
            { author: e.target.value }
        )
    }
    handleTextChange(e) {
        this.setState(
            { text: e.target.value }
        )
    }
    handleSubmit(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        // TODO: send request to the server
        this.setState({ author: '', text: '' });
    }
}