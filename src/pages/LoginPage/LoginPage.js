import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState = {
      email: '',
      password: '',
    };
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="text"
              name="password"
              required
              autoComplete="off"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
