import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <>
    <NavLink to="/" exact>
      Home
    </NavLink>

    {isAuthenticated && <NavLink to="/contacts">Contacts</NavLink>}
  </>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
