import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {editNote} from '../actions/notesAction';

class NoteEdit extends Component {
  state = {
    title: this.props.note.title,
    body: this.props.note.body,
    uid: this.props.uid
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.uid
    };
    this.props.editNote(this.props.match.params.noteid, note);
    this.props.history.push('/');
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
                <button className="btn btn-primary col-sm-12">Update</button>
              </div>

              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes[ownProps.match.params.noteid],
    uid: state.user.uid
  };
};

export default connect(mapStateToProps, {editNote})(NoteEdit);
