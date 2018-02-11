import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

class Layout extends React.Component {
  // expect to get a child
  propTypes: {
    children: PropTypes.string.isRequired
  };

  render(){
    return(
      <div className="overlay">
        <div className="box">
          <h2>{this.props.title}</h2>
          {this.props.children}
        </div>
        <footer>By signing up, you agree to our
          <a href="/terms">Terms of Service</a> and
          <a href="/privacy">Privacy Policy</a>.
        </footer>
      </div>
    )
  }
};

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      remember: true
    }
  }

  render(){
    return(
      <form action="/u/login" method="post" acceptCharset="utf-8">
      <Email />
      <Pssword />
      <label htmlFor="remember-me">
        <input type="checkbox" name="remember_me" value="1"
          id="remember-me" defaultChecked/>
          Remember Me
        </label>
        <p>
          <a href="register.html" className='inlink'>Register</a> |
          <a href="#request-reset-password" className="inlink"> Reset Password</a>
        </p>
        <button type="submit">Login</button>
      </form>
    )
  }
};


class Email extends React.Component {
  render(){
    return(
      <input type="email" name="email" data-info="An active email account is needed to gain access."
        placeholder="Your email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required title="You need to have a working email to gain access." required="required" id="email"/>
    )
  }
};

class Pssword extends React.Component {
  // no constructor or state is needed on the server

  render(){
    var ch = [<input type="password" name="password1" required="required" placeholder="Password"
              key="password" onChange={this.onChange} />];
    if(this.props.twice){
      ch[1] = [<input type="password" name="password2" required="required" placeholder="Repeat Password"
                key="password2" onChange={this.onChange} />]
    }
    if(this.props.msg){
      ch.push(<div className="error-message" key="error">{this.props.msg}</div>)
    }

    return(
      <div>{ch}</div>
    )
  }

};

class Register extends React.Component {
  render(){
    return(
      <form method="post" acceptCharset="utf-8" action="/register">
        <Email />
        <Pssword twice="1" msg={this.props.msg}/>
        <span className="col-p100 info"></span>
        <button type="submit">Submit</button>
      </form>
    )
  }
};

// the below code could be moved to server.js file for idiomacy
module.exports = {
  register(msg) {
    return ReactDOMServer.renderToString(<Register msg={msg}/>);
  }
}
