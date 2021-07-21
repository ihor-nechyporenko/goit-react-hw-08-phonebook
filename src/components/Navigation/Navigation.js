import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/contacts" exact>
      Contacts
    </NavLink>
  </>
);

export default Navigation;
