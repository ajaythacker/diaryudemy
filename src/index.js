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
import Login from './components/Login';

// redux store -> reducers -> actions | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>

        <Link className="navbar-brand" to="/">
          Diary 2018
        </Link>
      </div>
    </div>
  </nav>
);

//provide the store to react

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/login" component={Login} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
