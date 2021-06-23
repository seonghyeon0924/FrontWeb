import React, { useEffect, useState } from 'react'
import './FindAccount.css';
import axios from 'axios';
import ReactDOM from "react-dom";
// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'



export default function FindAccount() {
    const [id , setid] = useState("")
    const [email, setemail] = useState("")

    const onIdHandler = (e) => {
        setid(e.currentTarget.value);
    }

    const onEmailHandler = (e) => {
        setemail(e.currentTarget.value);
    }
    const formData = new FormData();
    formData.append("id", id);
    formData.append("email", email);

    const onLogin = (e) => {
        e.preventDefault();
        axios.post("http://49.50.161.97:8888/accounts/find", formData, {withCredentials: true})
            .then(res =>
            {
                const data = res.data;
                console.log(res);
                alert("이메일을 확인하세요");
            }).catch(reason =>
            {
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
                <input type="password" name={email} class="text-field" placeholder="이메일" onChange={onEmailHandler}></input>
                <input type="submit" value="비밀번호변경" class="submit-btn"></input>
                </form>

                <div className="links">
                <a href="#2">로그인 하기</a>
                <br></br>
                <hr className="hr1"></hr>
                <a href="#">회원가입 하기</a>
                </div>
            </div>
            </div>
        </body>
</html>
        </>
    )
}
