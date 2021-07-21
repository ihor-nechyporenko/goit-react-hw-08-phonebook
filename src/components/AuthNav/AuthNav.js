const { NavLink } = require('react-router-dom');

const AuthNav = () => (
  <>
    <NavLink to="/register" exact>
      Registration
    </NavLink>
    <NavLink to="/login" exact>
      Login
    </NavLink>
  </>
);

export default AuthNav;
