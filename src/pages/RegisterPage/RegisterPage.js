import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

class RegisterPage extends Component {
  state = {
    name: '',
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

    this.props.onRegister(this.state);

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <h1>Register Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
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
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Sign in</button>
        </form>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//     onRegister: data => dispatch(authOperations.register(data)),
// });

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
