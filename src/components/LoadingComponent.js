import React, {Component} from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//withRouter can give you history object's property

import {getUser} from '../actions/userAction';
import {getNotes} from '../actions/notesAction';
import Loading from './Loading';

class LoadingComponent extends Component {
  componentWillMount() {
    const {userLoading, notesLoading} = this.props;
    //if we haven't tried to load the user, then load user
    if (userLoading === undefined) {
      this.props.getUser();
    }
    //if we haven't tried to get notes, then load notes
    if (notesLoading === undefined) {
      this.props.getNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    //wait for user to get authenticated and try to load notes
    if (nextProps.notesLoading === -1 && nextProps.user !== null) {
      this.props.getNotes();
    }
  }

  render() {
    const {userLoading, notesLoading, children} = this.props;
    /*
            Throughout the lifetime of app, user and notes loading status will keep toggling between true and false
            When anything other than that toggling state , that means the loading operation is settled and not active
            That time, show the enclosing components
            For everything else and inbetween, show the loading component
        */
    if ((!userLoading && !notesLoading) || this.props.user === null) {
      return <div>{children}</div>;
    } else {
      return <Loading />;
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    notesLoading: state.loading.notes
  };
}

export default withRouter(connect(mapStateToProps, {getUser, getNotes})(LoadingComponent));
