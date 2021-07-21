import { connect } from 'react-redux';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';
import { authSelectors } from '../../redux/auth';
import styles from './Header.module.css';

const Header = ({ isAuthenticated }) => (
  <header>
    <Navigation />
    <h1 className={styles.title}>Phonebook</h1>
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
