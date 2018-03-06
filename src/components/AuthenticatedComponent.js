import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//withRouter can give you history object's property

class AuthenticatedComponent extends Component {
    componentDidUpdate() {
        //make sure the loading is done
        //if no user, then take them to login page
        const { userLoading, user } = this.props;
        if (userLoading === false && !user) {
            this.props.history.push('/login');
        }
    }
    render() {
        const { userLoading, user, children } = this.props;
        return userLoading === false && user ? <div>{children}</div> : null;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userLoading: state.loading.user
    };
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));
