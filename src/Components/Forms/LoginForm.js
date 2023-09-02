import React from 'react';
import '../../Styles/LoginFormStyle.css';

const LoginForm = () => {
    return (
        <form className="login-form">
            <h2 className='login-form-heading'>Login</h2>
            <div className="input-group">
                <label className='login-form-label' htmlFor="email">Email:</label>
                <input className='login-form-input' id="email" name="email" required />
            </div>
            <div className="input-group">
                <label className='login-form-label' htmlFor="password">Password:</label>
                <input className='login-form-input' id="password" name="password" required />
            </div>
            <div className="signup-link">
                <p>Don't have an account? <a>Sign up here!</a></p>
            </div>
            <button className='login-form-button button'>Log In</button>
        </form>
    );
}

export default LoginForm;