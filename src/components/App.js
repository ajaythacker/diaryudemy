import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote } from '../actions/notesAction';

class App extends Component {
    state = {
        title: '',
        body: '',
        notes: {}
    };

    //lifecycle
    componentDidMount() {
        this.props.getNotes();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const note = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.saveNote(note);
        this.setState({
            title: '',
            body: ''
        });
    };

    //render posts
    renderNotes = () => {
        return _.map(this.state.notes, (note, key) => {
            return (
                <div key={key}>
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                </div>
            );
        });
    };

    renderNotesEs6 = () => {
        const notesArray = Object.entries(this.state.notes);
        console.log('notesArray', notesArray);
        if (notesArray.length > 0) {
            const mapped = notesArray.map((note) => {
                if (note.title !== undefined) {
                    console.log('not undefined');
                    return (
                        <div key={note.title + 'a'}>
                            <h2>{note.title}</h2>
                            <p>{note.body}</p>
                        </div>
                    );
                } else {
                    console.log('undefined');
                }
            });
            return mapped;
        }
    };

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6 col-sm-offset-3'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='title'
                                    className='form-control no-border'
                                    placeholder='Title...'
                                    required
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='body'
                                    className='form-control no-border'
                                    placeholder='Body...'
                                    required
                                    onChange={this.handleChange}
                                    value={this.state.body}
                                />
                            </div>

                            <div className='form-group'>
                                <button className='btn btn-primary col-sm-12'>Save</button>
                            </div>
                        </form>

                        {this.renderNotes()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes
    };
}

// function const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }
//     }
// }

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getNotes: () => {
            dispatch(getNotes());
        },
        saveNote: (note) => {
            dispatch(saveNote(note));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//or we could have written export default connect(mapStateToProps,{getNotes,saveNote})(App);
