import React from 'react'
import './LoginForm.css';

export default function LoginForm() {
    return (
        <>
<html>
        <body>
            {/* <div className="logo">
                <img src="logo.PNG" alt=""></img>
            </div> */}
            <div className="login-form">
                <form>
                <input type="text" name="email" class="text-field" placeholder="아이디"></input>
                <input type="password" name="password" class="text-field" placeholder="비밀번호"></input>
                <input type="submit" value="로그인" class="submit-btn"></input>
                </form>

                <div className="links">
                <a href="#2">회원가입 하기</a>
                <br></br>
                <a href="#">아이디, 비밀번호 찾기</a>
                </div>
            </div>
        </body>
</html>
        </>
    )
}
