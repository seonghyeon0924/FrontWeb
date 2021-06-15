import React, { useState } from 'react'
import './SignForm.css';
import {Button, Input} from 'semantic-ui-react'
import axios from 'axios';
axios.defaults.withCredentials = true;
// React 최상단 index.js에서 axios에 withCredentials를 true로 설정해줘야 refreshToken cookie를 주고받을 수 있다.

// npm install --save semantic-ui-react semantic-ui-css


export default function SignupForm() {
    // const dispatch = useDispatch();
    const [id , setid] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")

    const onIdHandler = (e) => {
        setid(e.currentTarget.value);
    }

    const onEmailHandler = (e) => {
        setemail(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setpassword(e.currentTarget.value);
    }

    const onUsernameHandler = (e) => {
        setusername(e.currentTarget.value);
    }

    const onSubmit = () => {
        axios({
            method: 'post',
            url: '/accounts',
            data: {
                "ID" : id,
                "PW" : password,
                "Username" : username,
                "Email" : email
            }
        }).then(res => {
            const { ACCESS_TOKEN } = res.data;
            const { REFRESH_TOKEN } = res.data;

            // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
            axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`; 
            axios.defaults.headers.common['Authorization'] = `Bearer ${REFRESH_TOKEN}`;      

        }).catch(error => console.log(error));
    }

    return (
        <>
<html>
        <body>
        <div className="container">
            <div className="signup-form">
                <form>
                <input type="text"  name="id" class="text-field" placeholder="아이디" onChange={onIdHandler}></input>
                <input type="email" name="email" class="text-field" placeholder="이메일" onChange={onEmailHandler}></input>
                <input type="password" name="password" class="text-field" placeholder="비밀번호" onChange={onPasswordHandler}></input>
                <input type="text" name="username" class="text-field" placeholder="이름" onChange={onUsernameHandler}></input>
                <br/>
                <input type="submit" onClick={onSubmit} value="회원가입" class="submit-btn"></input>
                </form>

                <div className="links">
                <a href="#2">로그인</a>
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
