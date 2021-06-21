import React, { useEffect, useState } from 'react'
import './LoginForm.css';
import axios from 'axios';
import ReactDOM from "react-dom";
// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'



export default function LoginForm() {
    const [id , setid] = useState("")
    const [pw, setpassword] = useState("")

    const onIdHandler = (e) => {
        setid(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setpassword(e.currentTarget.value);
    }
    const formData = new FormData();
    formData.append("id", 'test1');
    formData.append("pw", 'test1');

    const onLogin = (e) => {
        e.preventDefault();
        axios.post("http://49.50.161.97:8888/accounts/login", formData, {withCredentials: true})
            .then(res =>
            {
                const data = res.data;
                console.log(res);
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
                <input type="password" name={pw} class="text-field" placeholder="비밀번호" onChange={onPasswordHandler}></input>
                <input type="submit" value="로그인" class="submit-btn"></input>


                {/* <input> </input> 
                <div value={id} class="text-field" placeholder="아이디"  onChange={onIdHandler}> </div>

                


                <input></input>
                <div value={password} class="text-field" placeholder="비밀번호"  onChange={onPasswordHandler} >
                </div>
                

                
                <input></input>
                <div class="submit-btn" >로그인
                
                </div> */}
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
