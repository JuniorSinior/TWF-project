import React from 'react';
import Logo from './components/Logo';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {
    return (
        <div>
            <Logo />
            <hr></hr>
            <h3 className='logintext'>로그인</h3>
            <hr className='line'></hr>
            <input type='text' placeholder='아이디' className='txtbox'></input>
            <input type='text' placeholder='비밀번호' className='txtbox'></input>
            <li className='txt'>
                <Link to='/signup'>회원가입</Link>
            </li>

            <button className='btn'>로그인</button>
        </div>
    );
}

export default Login;