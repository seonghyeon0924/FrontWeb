// 전체 게시물이 보이는 곳
// 전체 게시물을 반환 ( 페이징 처리)
// 요청 PAGE (DEFAULT = 0) / ID ( 게시물 가져올 계정 )
// 응답 BOARD_LIST : 0 <= N <= 0

import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
export default function BoardForm() {


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
                     <Link to="/boardup">글쓰기 </Link>
                     <Link to="/main">| 뮤직피드 </Link>
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
    
    <h1>BoardForm 입네당</h1>
        </body>
    </html>
    
    
        </>
        )
    }
    