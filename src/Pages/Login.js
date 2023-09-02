import React, { useState } from 'react';
import { LoginForm } from '../Components';
import '../Styles/LoginStyle.css';

const Login = () => {
    return (
        <section className='login-section'>
            <LoginForm />
        </section>
    );
}

export default Login;