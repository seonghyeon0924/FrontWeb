// 전체 게시물이 보이는 곳

import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Board() {


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
                     <Link to="/boardup">글쓰기</Link>
                     <Link to="/main">| 뮤직피드</Link>
                     <Link to="/">| 로그아웃</Link>
                     <Link to="/mypage">| 마이페이지</Link>

                        {/* <a href="@"> 글쓰기 </a>
                        <a href="@">| 뮤직피드 </a>
                        <a href="@">| 로그아웃 </a>
                        <a href="@">| 마이페이지 </a> */}
                     </div>
                    <div className="searchline"> 
                        <input type="submit" value="검색" class="searchbtn"></input>
                        <input type="text" class="main-text-field" placeholder="검색어 입력"></input>
                   </div>
                </header>
            </div>
            <body>
    
    
        </body>
    </html>
    
    
        </>
        )
    }
    