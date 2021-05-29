import React, { useEffect, useState } from 'react'
import './LoginForm.css';
import axios from 'axios';
import ReactDOM from "react-dom";
// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'



export default function LoginForm() {

    //axios.get(url,[,config])  서버에서 데이터를 가져와서 보여주거나 하는 용도
    // ex)axios.get('https://my-json-server.typicode.com/zofqofhtltm8015/fs/user').then((Response)=>{
    //     console.log(Response.data);
    // }).catch((Error)=>{
    //     console.log(Error);
    // })
    

    // //axios.post("url주소", {
    //     data객체
    // },[,config])  새로운 리소스를 create하는데 사용
    // 로그인, 회원가입 등 사용자가 생성한 파일을 서버에다가 업로드할때 사용. post사용 시 주소창에 쿼리스트링이 남지 않으므로 get보다 안전


    // useEffect(() => {
    //     axios.get()
    // })

    const JWT_EXPIRRY_TIME = 24 * 3600 * 1000; //만료시간 (24시간 밀리 초로 표현)

    const onLogin = (id, password) => {
            const data = {
                id,
                password,
            };

            axios.post('/Login', data)
            .then(onLoginSuccess)
            .catch(error => {
                //에러처리
            });
    }


//    const onRefresh = () => {
//         axios.post('/refresh', data)
//         .then(onLoginSuccess)
//         .catch(error => {
//             //로그인 실패 처리
//         });
//     }

   const onLoginSuccess = response => {
        const {accessToken} = response.data;

        //accessToken 설정
        axios.defaults.headers.common['Authorization'] = 'Bearer ${accessToken}';

    //     //accessToken 만료하기 1분전에 로그인 연장
    //     setTimeout(onRefresh, JWT_EXPIRRY_TIME - 60000);
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
                <input type="text"name="id" class="text-field" placeholder="아이디" value="id"></input>
                <input type="password" name="password" class="text-field" placeholder="비밀번호" value="password" ></input>
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
