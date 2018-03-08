import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitComment extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className='form-group'>
                        <textarea
                            type='text'
                            name='commentBody'
                            className='form-control no-border'
                            placeholder='Write Comment'
                            required
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

export default connect(mapStateToProps)(SubmitComment);
