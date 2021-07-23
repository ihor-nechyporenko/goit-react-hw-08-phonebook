import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation';
import { authSelectors } from '../../redux/auth';
import styles from './Header.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ isAuthenticated }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Navigation />
          <Typography variant="h6" className={classes.title}>
            <h1 className={styles.title}>Phonebook</h1>
          </Typography>
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
