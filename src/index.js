import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
//BrowserRouter will mainly create a history object to keep track of the location (URL)
//When location changes because of a navigation action, the child component (in this case LoadingComponent) will be re-rendered

//Link is for the navigation menu , like the html anchor tag to define a hyperlink
//Link is different than the anchor tag because they change the URL without refreshing the page

//Route specifies the url that corresponds to each component

//Switch component is used to render only the first route that matches the location

//react-router-dom also contains a Redirect component which is used like a "default" in switch case where if none of the routes match inside Switch conmponent, it defaults
//to the specified route :
//Example:
/*
 <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
*/

import Login from './components/Login';
import Header from './routes/Header';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';

// redux store -> reducers -> actions | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LoadingComponent>
        <div>
          <Switch>
            <Route path="/login" component={Login} exact={true} />
            <AuthenticatedComponent>
              <Header />
              <Route path="/" component={App} exact={true} />
              <Route path="/:noteid" component={NoteDetail} exact={true} />
              <Route path="/:noteid/edit" component={NoteEdit} exact={true} />
            </AuthenticatedComponent>
          </Switch>
        </div>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
