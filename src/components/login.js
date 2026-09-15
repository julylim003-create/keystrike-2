import React from 'react';
import './login.css';

function Login({ onNavigate }) {
  const preventNavigation = (event, screen) => { event.preventDefault(); onNavigate(screen); };
  return <div className="login-page"><div className="container">
    <a href="splashscreen.html" onClick={(event) => preventNavigation(event, 'splash')}><img src="/assets/backblue.png" alt="back" className="back" /></a>
    <div className="content">
      <h1 className="Musician">Welcome Musician!</h1><h2 className="Log">Log in to your account.</h2>
      <input type="text" id="email" name="email" placeholder="Email" /><br /><input type="password" id="password" name="password" placeholder="Password" />
      <div className="forgot"><a href="#forgot-password">Forgot Password?</a></div>
      <button className="login"><a href="mainmenu.html" onClick={(event) => preventNavigation(event, 'mainmenu')}>Log In</a></button><br />
      <p>-------------- Or --------------</p><button className="Google"><a href="#google-login">Continue with Google</a></button><br />
      <div className="redirect"><p className="alre">Don't have an account?</p><p className="lg"><a href="signup.html" onClick={(event) => preventNavigation(event, 'signup')}>Sign up.</a></p></div>
    </div>
  </div></div>;
}

export default Login;
