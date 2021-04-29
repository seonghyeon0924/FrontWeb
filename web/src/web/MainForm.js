import React from 'react'
import './MainForm.css';
// import {Button, Input} from 'semantic-ui-react'
// import logo from '.image/logo.jpg';

export default function MainForm() {
    return (
    <>
<html>
    <body>
        <div className="page">
            <header>
                 <div className="logo">
                    {/* 왼쪽에 로고넣기 */}
                    <img src ="/image/logo2.jpg" className="logos"/>
                 </div>
              {/* 로그인, 비로그인 일 때 메뉴 다르게 하기 */}
                 <div className="top_menu">
                    <a href="@"> 홈 </a>
                    <a href="@">| 뭐지 </a>
                    <a href="@">| 로그인 </a>
                    <a href="@">| Mypage</a>
                 </div>
                <div className="searchline"> 
                    <input type="submit" value="검색" class="searchbtn"></input>
                    <input type="text" class="main-text-field" placeholder="검색어 입력"></input>
               </div>
            </header>
        </div>
            <div className="feed">
            <h1>메인</h1>
            </div>  
        
    </body>
</html>


    </>
    )
}
