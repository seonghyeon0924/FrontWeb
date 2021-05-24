import React, { useEffect, useState } from 'react'
import './LoginForm.css';
import axios from 'axios';
// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'



export default function LoginForm() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

        // input 데이터의 변화가 있을 때마다 value 값을 변경해서 useState해줌
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        console.log('click login')
    }

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


    const login = async () =>
    {
        axios.get("https://f904adec-09cc-4aec-b2e3-db9aceeb3abf.mock.pstmn.io??id="+tjdgus+"&pw="+tjdgus)
            .then(() =>
            {
                console.log("Login 성공!");
                setInputId('');
                setInputPw('');
            });
    };

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
                <input type="text" value={inputId} name="email" class="text-field" placeholder="아이디" onChange={handleInputId}></input>
                <input type="password" value={inputPw} name="password" class="text-field" placeholder="비밀번호" onChange={handleInputPw}></input>
                <input type="submit" value="로그인" class="submit-btn" onClick={onClickLogin}></input>
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
