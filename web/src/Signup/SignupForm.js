import React, { useState } from 'react'
import './SignForm.css';
import {Button, Input} from 'semantic-ui-react'
import axios from 'axios';
axios.defaults.withCredentials = true;
// React 최상단 index.js에서 axios에 withCredentials를 true로 설정해줘야 refreshToken cookie를 주고받을 수 있다.

// npm install --save semantic-ui-react semantic-ui-css


export default function SignupForm() {
    // const dispatch = useDispatch();
  
    const [id , setId] = useState("")
    const [email, setEmail] = useState("")
    const [pw, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const onIdHandler = (e) => {
        setId(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value)
    }

    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios({
            method : 'post',
            url : '/api/accounts',
            data : {
                id : id,
                email : email,
                pw : pw,
                username : username
            }
        }).then(res => {
            console.log(res);
            console.log('check')
        }).catch(
            error => console.log(error)
        )
    }
        
        
        return (
        <>
        <div className="container">
            <div className="signup-form">
                <form onSubmit={onSubmitHandler}>
                <input type="text"  name={id} class="text-field" placeholder="아이디" onChange={onIdHandler}></input>
                <input type="email" name={email} class="text-field" placeholder="이메일" onChange={onEmailHandler}></input>
                <input type="password" name={pw} class="text-field" placeholder="비밀번호" onChange={onPasswordHandler}></input>
                <input type="text" name={username} class="text-field" placeholder="이름" onChange={onUsernameHandler}></input>
                        <br/>
                        <input type="submit" value="회원가입" class="submit-btn"></input>
                        </form>

                        <div className="links">
                <a href="#2">로그인</a>
                <br></br>
                <hr className="hr1"></hr>
                <a href="#">아이디, 비밀번호 찾기</a>
                </div>
            </div>
            </div>
        </>
        )
}

