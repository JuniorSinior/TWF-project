import React from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import './Login.css';
import './style.css';

function Login(props) {
    return (
        <div>
            <Logo />
            <hr></hr>
            <div>
                <h3 className='pgnametxt'>로그인</h3>
                <div><hr className='shortline'></hr></div>
                <div><input type='text' placeholder='아이디' className='txtbox'></input></div>
                <div><input type='password' placeholder='비밀번호' className='txtbox'></input></div>
                <div><Link to='/signup' className='txt'>회원가입</Link></div>
                <button className='btn'>로그인</button>
            </div>
        </div>
    );
}

export default Login;