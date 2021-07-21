import { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Container from './components/Container';
import Header from './components/Header';
// import Form from './components/Form';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList';
// import Loader from './components/Loader';
// import Error from './components/Error';
// import { operations, selectors } from './redux/phonebook';
import { authOperations } from './redux/auth';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';

import './common.css';
// import fadeStyles from './fade/fadeFilter.module.css';
import fadeHeaderStyles from './fade/fadeHeader.module.css';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <Container>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsPage}
          />
        </Switch>

        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames={fadeHeaderStyles}
          unmountOnExit
        >
          <Header />
        </CSSTransition>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
