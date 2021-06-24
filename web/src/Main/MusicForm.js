import React from 'react'
import './MainForm.css';
import MusicFeed from './MusicFeed';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import {Button, Input} from 'semantic-ui-react'
// import logo from '.image/logo.jpg';
// npm install redux-devtools-extension
//npm add axios
export default function MainForm() {
    return (
    <>
<html>
        <div className="page">
            <header>
                 <div className="logo">
                    
                    <img src ="/image/logo55.jpg" className="logos"/>
                 </div>
              {/* 로그인, 비로그인 일 때 메뉴 다르게 하기 */}
                 <div className="top_menu">
                     <Link to="/musicup">음악 업로드 </Link>
                     <Link to="/board">| 메인피드 </Link>
                     <Link to="/">| 로그아웃 </Link>
                     <Link to="/mypage">| 마이페이지 </Link>
                 </div>
                <div className="searchline"> 
                    <input type="submit" value="검색" class="searchbtn"></input>
                    <input type="text" class="main-text-field" placeholder="검색어 입력"></input>
               </div>
            </header>
        </div>
        <body>
        <MusicFeed name="리액트뮤직" title="으악"></MusicFeed>
        <MusicFeed name="도구" title="왈왈"></MusicFeed>


    </body>
</html>


    </>
    )
}
