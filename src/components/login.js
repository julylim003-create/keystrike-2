import React from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import './login.css';

function Login({ onNavigate }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const preventNavigation = (event, screen) => { event.preventDefault(); onNavigate(screen); };
  const finishLogin = async (loginAction) => {
    setError('');
    setLoading(true);
    try {
      await loginAction();
      onNavigate('mainmenu');
    } catch (loginError) {
      setError(loginError.code === 'auth/invalid-credential' ? 'The email or password is incorrect.' : loginError.message);
    } finally {
      setLoading(false);
    }
  };
  const handleEmailLogin = (event) => {
    event.preventDefault();
    finishLogin(() => signInWithEmailAndPassword(auth, email, password));
  };
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    finishLogin(() => signInWithPopup(auth, new GoogleAuthProvider()));
  };
  return <div className="login-page"><div className="container">
    <a href="splashscreen.html" onClick={(event) => preventNavigation(event, 'splash')}><img src="/assets/backblue.png" alt="back" className="back" /></a>
    <div className="content">
      <h1 className="Musician">Welcome Musician!</h1><h2 className="Log">Log in to your account.</h2>
      <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} /><br /><input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <div className="forgot"><a href="#forgot-password">Forgot Password?</a></div>
      <button className="login" onClick={handleEmailLogin} disabled={loading}><a href="mainmenu.html" onClick={(event) => event.preventDefault()}>{loading ? 'Logging In...' : 'Log In'}</a></button><br />
      <p>-------------- Or --------------</p><button className="Google" onClick={handleGoogleLogin} disabled={loading}><a href="#google-login" onClick={(event) => event.preventDefault()}>Continue with Google</a></button><br />
      {error && <p role="alert">{error}</p>}
      <div className="redirect"><p className="alre">Don't have an account?</p><p className="lg"><a href="signup.html" onClick={(event) => preventNavigation(event, 'signup')}>Sign up.</a></p></div>
    </div>
  </div></div>;
}

export default Login;
