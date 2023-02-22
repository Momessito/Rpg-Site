import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ isLoggedIn: true });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const url = 'http://52.86.121.123:3000/login';
    const username = document.querySelector('.username-input').value;
    const password = document.querySelector('.password-input').value;

    const data = {
      username: username,
      password: password
    };

    axios.post(url, data)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.setState({ isLoggedIn: true });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        document.querySelector('.erro').innerHTML = 'Usuario ou senha incorreta'
      });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ isLoggedIn: false });
  };

  render() {
    let loginForm = (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" className="username-input" name="username" />
  
        <label htmlFor="password">Password:</label>
        <input type="password" className="password-input" name="password" />
  
        <button type="submit">Submit</button>
        <p className='erro'></p>
      </form>
    );
  
    if (this.state.isLoggedIn) {
      loginForm = <button className="logout-button" onClick={this.handleLogout}>Logout</button>;
    }
  
    return (
      <div>
        <h2 className={this.state.isLoggedIn ? 'Logado' : 'Login'} onClick={()=>{document.querySelector('.login-box').style.transform = 'translateX(-50%)'}}>{this.state.isLoggedIn ? 'Log Out' : 'Login'}</h2>
        <div className='login-box'>
          <h4 style={{textAlign : 'left', width : '100%'}} onClick={()=>{document.querySelector('.login-box').style.transform = 'translateX(-1000px)'}}>X</h4>
          {loginForm}
        </div>
      </div>
    );
  }
  
}

export default LoginForm;
