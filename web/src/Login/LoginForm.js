import React from 'react'
import './LoginForm.css';
// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'



export default function LoginForm(props) {

    // const dispatch = useDispatch();
    // const [Id, setId] = useState("");
    // const [Password, setPassword] = useState("");

//typing 하면 onChange 를 발생시켜 state를 바꿔주어 value를 바꾼다.


    // const onIdHandler = (event) => {
    //     setId(event.currentTarget.value);
    // }

    // const onPasswordHandler = (event) => {
    //     setPassword(event.currentTarget.value);
    // }

    // const onSubmitHandler = (event) => {
    //     // page refresh를 막아준다
    //     event.preventDefault();

    //     console.log("ID",Id);
    //     console.log("Password",Password);

        // 서버에 보내기
    //     let body = {
    //         id : Id,
    //         password : Password
    //     }

    //     //디스패치로 액션 취하기
    //     dispatch(loginUser(body))
    //     .then(response => {
    //         if (response.payload.loginSuccess) {
    //             props.history.push('/')
    //             //리액트에서 페이지 이동하기 위해서는 props.history.push() 이용.
    //            	// 로그인 완료된 후 처음 화면(루트 페이지-landingpage로)으로 돌악가게 하기 
    //         } else {
    //             alert("Error")
    //         }
    //     })

    // }



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
                <input type="text" name="email" class="text-field" placeholder="아이디"></input>
                <input type="password" name="password" class="text-field" placeholder="비밀번호"></input>
                <input type="submit" value="로그인" class="submit-btn"></input>
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
