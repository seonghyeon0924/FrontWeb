import React from 'react'
import './SignForm.css';
import {Button, Input} from 'semantic-ui-react'
// npm install --save semantic-ui-react semantic-ui-css


export default function SignupForm() {
    return (
        <>
<html>
        <body>
            <div className="signup-form">
                <form>
                <input type="text" name="email" class="text-field" placeholder="아이디"></input>
                <input type="password" name="password" class="text-field" placeholder="비밀번호"></input>
                <input type="text" name="name" class="text-field" placeholder="이름"></input>
                <input type="text" name="nickname" class="text-field" placeholder="닉네임"></input>
                <input type="submit" value="중복 체크" class="submit-btn1"></input>
                <br/>
                <input type="number" className="text-field" name="quantity" min="5" max="120" placeholder="나이"></input>
                <input type="submit" value="회원가입" class="submit-btn"></input>
                </form>

                <div className="links">
                <a href="#2">로그인</a>
                <br></br>
                <a href="#">아이디, 비밀번호 찾기</a>
                </div>
            </div>
        </body>
</html>
        </>
    )
}
