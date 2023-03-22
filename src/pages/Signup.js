import React from 'react';
import Logo from '../components/Logo';
import './Login.css';

function Signup(props) {
    return (
        <div>
            <Logo />
            <hr></hr>
            <div>
                <h3 className='logintext'>회원가입</h3>
                <hr className='line'></hr>
                <input type='text' placeholder='아이디' className='txtbox'></input>
                <input type='password' placeholder='비밀번호' className='txtbox'></input>
                <input type='password' placeholder='비밀번호 확인' className='txtbox'></input>
                <input type='password' placeholder='이름' className='txtbox'></input>
                <input type='email' placeholder='이메일' className='txtbox'></input>
                <label className='lbl'>가입 약관 동의</label>
                <div className='left-space'>
                    <input type='checkbox' id='check1'></input><label className='info'>개인정보 제 3차 제공 동의</label>
                </div>
                <button className='btn'>회원가입</button>
            </div>

        </div>
    );
}

export default Signup;