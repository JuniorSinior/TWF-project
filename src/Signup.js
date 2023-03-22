import React from 'react';
import Logo from './components/Logo';
import './Login.css';

function Signup(props) {
    return (
        <div>
            <Logo/>
            <hr></hr>
            <h3 className='logintext'>회원가입</h3>
            <hr className='line'></hr>
        </div>
    );
}

export default Signup;