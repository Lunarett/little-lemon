import React, { useState } from 'react';
import '../Styles/LoginStyle.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" className="login-button">Login</button>
        </form>
    );
};

function Login() {
    return (
        <>
            <div className='loginBox'>
                <LoginForm />
            </div>
        </>
    );
}

export default Login;