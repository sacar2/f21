import React from 'react';

export default class Login extends React.Component{

  render() {
    return(
      <div className="login-box">
          <form className="login-box-field">
            <div className="login-box-field-email">
              <label for="inputEmail"><img src="./src/img/usr.png"/></label>
              <input  type="email" id="inputEmail" placeholder="EMAIL" required autofocus/>
            </div>
            <div className="login-box-field-password">
              <img src="./src/img/pass.png"/>
              <input type="password" id="inputPassword" placeholder="PASSWORD" required/>
            </div>
            <button className="login-box-field-submit btn btn-lg btn-primary btn-block btn-signin" type="submit"><strong>NEXT</strong></button>
          </form>
          <a className="login-box-forgot">
              <p>Need Help?</p>
          </a>
      </div>
    );
  }
}
