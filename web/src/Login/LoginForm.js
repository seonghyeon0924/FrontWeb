import {useCallback, useEffect, useState} from "react";
import './LoginForm.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'
import { useHistory } from "react-router";


export default function LoginForm() {
    let history = useHistory();
    const [id , setid] = useState("")
    const [pw, setpassword] = useState("")

    const onIdHandler = (e) => {
        setid(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setpassword(e.currentTarget.value);
    }
    const formData = new FormData();
    formData.append("id", id);
    formData.append("pw", pw);

    const onLogin = (e) => {
        e.preventDefault();
        axios.post("http://49.50.161.97:8888/accounts/login", formData, {withCredentials: true})
            .then(res =>
            {
               
                history.push("/board");
                

                const ACCESS_TOKEN = res.data.access_TOKEN;
                const REFRESH_TOLEN = res.data.refresh_TOKEN;

                
                console.log(res);
                console.log("ACCESS토큰 : "+ACCESS_TOKEN);
                console.log("REFRESH토큰 : "+REFRESH_TOLEN);
            
            }).catch(reason =>
            {
                alert("아이디 혹은 비밀번호가 다릅니다");
                console.log(reason);
            });
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
                <form onSubmit={onLogin}>
                <input type ="text" name={id} class="text-field" placeholder="아이디" onChange={onIdHandler} ></input>
                <input type="password" name={pw} class="text-field" placeholder="비밀번호" onChange={onPasswordHandler}></input>
                <input type="submit" value="로그인" class="submit-btn"></input>
                </form>

                <div className="links">
                    <Link to="/signup">회원가입 하기</Link>
                    <hr></hr>
                    <Link to="/find">아이디, 비밀번호 찾기</Link>
                </div>

                
            </div>
            </div>
        </body>
</html>
        </>
    )
}
