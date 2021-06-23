import React, { useState } from 'react'
import './SignForm.css';
import {Button, Input} from 'semantic-ui-react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
        console.log(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("pw", pw);
    formData.append("email", email);
    formData.append("username", username);


    // const formData = new FormData();
    // formData.append("id", 'test9');
    // formData.append("pw", 'test9');
    // formData.append("email", 'test9@naver.com');
    // formData.append("username", 'test9');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://49.50.161.97:8888/accounts", formData, {withCredentials: true})
            .then(res =>
            {
                console.log(res);
                console.log(res.data.access_TOKEN);
                console.log(res.data.refresh_TOKEN);
            }).catch(reason =>
            {
                console.log(reason);
                });
        }            


    
    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     axios({
    //         method : 'post',
    //         url : '/accounts',
    //         data : {
    //             id : id,
    //             email : email,
    //             pw : pw,
    //             username : username
    //         }
    //     }).then(res => {
    //         console.log(res.data);
    //         console.log('check')
    //     }).catch(
    //         error => console.log(error)
    //     )
    // }
        
        
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
                            <Link to="/">로그인</Link>
                            <hr size="5"></hr>
                            <Link to="find">아이디, 비밀번호 찾기</Link>
                {/* <a href="#2">로그인</a>
                <br></br>
                <hr className="hr1"></hr>
                <a href="#">아이디, 비밀번호 찾기</a> */}
                </div>
            </div>
            </div>
        </>
        )
}

