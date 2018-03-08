import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getNotes, saveNote, deleteNote} from '../actions/notesAction';
import {getUser} from '../actions/userAction';
import NoteCard from './NoteCard';
import {Link} from 'react-router-dom';

class App extends Component {
  state = {
    title: '',
    body: '',
    uid: ''
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.user.uid
    };
    this.props.saveNote(note);
    this.setState({
      title: '',
      body: '',
      uid: ''
    });
  };

  //render posts
  renderNotes = () => {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <Link to={`/${key}`}>
            <h2>{note.title}</h2>
          </Link>
          <p>{note.body}</p>
          <p>Created by : {note.uid}</p>
          {note.uid === this.props.user.uid && (
            <div>
              <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>
                Delete
              </button>
              <button className="btn btn-info btn-xs pull-right">
                <Link to={`/${key}/edit`}>Update</Link>
              </button>
            </div>
          )}
        </NoteCard>
      );
    });
  };

  renderNotesEs6 = () => {
    const notesArray = Object.entries(this.state.notes);
    console.log('notesArray', notesArray);
    if (notesArray.length > 0) {
      const mapped = notesArray.map(note => {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="body"
                  className="form-control no-border"
                  placeholder="Body..."
                  required
                  onChange={this.handleChange}
                  value={this.state.body}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
              <br />
              <br />
            </form>
            <br />
            <br />
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
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
    saveNote: note => {
      dispatch(saveNote(note));
    },
    deleteNote: id => {
      dispatch(deleteNote(id));
    },
    getUser: () => {
      dispatch(getUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//or we could have written export default connect(mapStateToProps,{getNotes,saveNote,deleteNote,getUser})(App);
