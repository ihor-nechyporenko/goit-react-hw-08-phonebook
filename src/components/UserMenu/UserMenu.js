import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const UserMenu = ({ avatar, userName, onLogout }) => (
  <>
    <img src={avatar} alt="avatar" width="30" />
    <span>Welcome, {userName}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </>
);

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
