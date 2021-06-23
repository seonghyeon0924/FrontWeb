import React from 'react'
import './MypageForm.css';
import Myinfo from './Myinfo';


// 내정보
// 내 게시글
// 구독 정보
// 음악 관심사

export default function MypageForm() {
    return (
        <>
            <div className="mypage">
            <header>
                 <div className="logo">
                    {/* 왼쪽에 로고넣기 */}
                    <img src ="/image/logo22.png" className="logos" alt="logo"/>
                 </div>

                 <div className="top_menu">
                    <a href="@"> Home </a>
                    <a href="@">| Streaming </a>
                    <a href="@">| Logout </a>
                    <a href="@">| Mypage </a>
                 </div>
                 <div className="my_menu">
                    <a href="@"> 관심 음악 </a>
                    <a href="@">| 구독 정보 </a>
                    <a href="@">| 내 게시물 </a>
                    
                 </div>
                <div className="searchline"> 
                    <input type="submit" value="검색" class="searchbtn"></input>
                    <input type="text" class="mytext-field" placeholder="검색어 입력"></input>
               </div>
            </header>
            </div>

            <body>
            <Myinfo myname="하여"></Myinfo>
            </body>

        </>
    )
}