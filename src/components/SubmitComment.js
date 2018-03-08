import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/commentAction';

class SubmitComment extends Component {
    state = {
        commentBody: ''
    };
    changeHandler = (e) => {
        this.setState({ commentBody: e.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();
        const comment = {
            commentBody: this.state.commentBody,
            uid: this.props.uid
        };

        this.props.saveComment(comment, this.props.noteId);
        this.setState({ commentBody: '' });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className='form-group'>
                        <textarea
                            type='text'
                            name='commentBody'
                            className='form-control no-border'
                            placeholder='Write Comment'
                            required
                            onChange={this.changeHandler}
                            value={this.state.comment}
                        />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success'>Add Comment</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        uid: state.user.uid
    };
};

export default connect(mapStateToProps, { saveComment })(SubmitComment);
