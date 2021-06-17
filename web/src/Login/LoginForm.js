import React, { useEffect, useState } from 'react'
import './LoginForm.css';
import axios from 'axios';
import ReactDOM from "react-dom";
// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'



export default function LoginForm() {
    const [id , setid] = useState("")
    const [password, setpassword] = useState("")

    const onIdHandler = (e) => {
        setid(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setpassword(e.currentTarget.value);
    }


    const onLogin = () => {
        axios({
            method: 'post',
            url: '/accounts/login',
            data: {
                "ID" : id,
                "PW" : password,
            }
        }).then(res => {
            const { ACCESS_TOKEN } = res.data.access_TOKEN;
            const { REFRESH_TOKEN } = res.data.refresh_TOKEN;
            console.log(res.data.access_TOKEN)
            // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
            axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`; 
            axios.defaults.headers.common['Authorization'] = `Bearer ${REFRESH_TOKEN}`;      
            console.log(ACCESS_TOKEN,REFRESH_TOKEN);
        }).catch(error => console.log(error));
    }

    return (
        <>
<html>
        <body>
        <div className="container">
            <div className="loginlogo">
                <img src="image/logo444.jpg" className="loginlogo"/>
            </div>
            <div className="login-form">
                <form>
                <input type="text"name={id} class="text-field" placeholder="아이디"  onChange={onIdHandler}></input>
                <input type="password" name={password} class="text-field" placeholder="비밀번호"  onChange={onPasswordHandler} ></input>
                <input type="submit" class="submit-btn" onClick={onLogin}></input>
                </form>

                <div className="links">
                <a href="#2">회원가입 하기</a>
                <br></br>
                <hr className="hr1"></hr>
                <a href="#">아이디, 비밀번호 찾기</a>
                </div>
            </div>
            </div>
        </body>
</html>
        </>
    )
}
