import React from 'react';
import './signup.css';

function Signup({ onNavigate }) {
  const preventNavigation = (event, screen) => { event.preventDefault(); onNavigate(screen); };
  return <div className="signup-page"><div className="container">
    <a href="mainmenu.html" onClick={(event) => preventNavigation(event, 'mainmenu')}><img src="/assets/backblue.png" alt="back" className="back" /></a>
    <div className="content"><h1 className="Musician">Welcome, Musician!</h1><h2 className="Log">Start your musical journey!</h2>
      <input type="text" id="username" name="username" placeholder="Name" /><br /><input type="text" id="email" name="email" placeholder="Email" /><br /><input type="password" id="password" name="password" placeholder="Password" />
      <div className="forgot"><a href="#forgot-password">Forgot Password?</a></div><button className="signup"><a href="mainmenu.html" onClick={(event) => preventNavigation(event, 'mainmenu')}>Sign Up</a></button><br />
      <p>-------------- Or --------------</p><button className="Google"><a href="#google-signup">Continue with Google</a></button><br />
      <div className="redirect"><p className="alre">Already have an account?</p><p className="lg"><a href="login.html" onClick={(event) => preventNavigation(event, 'login')}>Log in.</a></p></div>
    </div>
  </div></div>;
}

export default Signup;
