import React from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

export default class CommentBox extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { id: 1, author: "Pete Hunt", text: "This is one comment" },
                { id: 2, author: "Jordan Walke", text: "This is *another* comment" },
                { id: 3, author: "Blue Star", text: "This is a special comment" }
            ]
        }
    }
    componentDidMount() {
        console.log('CommentBox loaded');
    }
    handleCommentSubmit(comment) {
        comment.id = Date.now();
        this.setState({
            data: this.state.data.concat([comment])
        });
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentForm onCommentSubmit={comment => this.handleCommentSubmit(comment)} />
                <CommentList data={this.state.data} />
            </div>
        )
    }
}