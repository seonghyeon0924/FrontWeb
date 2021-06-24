// 게시물 업로드 하는 폼
import { useState } from "react";
import axios from 'axios';

import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from "react-router";


export default function BoardUpload() {
    let history = useHistory();
    const [CONTEXT , setContext] = useState("")
    // const [isPublic, setpassword] = useState("")
    // isPublic true, false 설정하기 찾아봐야함

    const onContextHandler = (e) => {
        setContext(e.currentTarget.value);
    }

    const formData = new FormData();
    formData.append("CONTEXT", CONTEXT);
    // formData.append("ipPublic", pw);

    const onUpload = (e) => {
        e.preventDefault();
        axios.post("http://49.50.161.97:8888/accounts/login", formData, {withCredentials: true})
            .then(res =>
            {
               
                history.push("/board");
                        
                console.log(res);

            }).catch(reason =>
            {
                console.log(reason);
            });
        }            

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
                     <Link to="/board">메인피드 </Link>
                     <Link to="/main">| 뮤직피드 </Link>
                     <Link to="/">| 로그아웃 </Link>
                     <Link to="/mypage">| 마이페이지 </Link>

                        {/* <a href="@"> 게시판 </a>
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
            {/* 게시글 입력하는 부분 */}
                <h1>게시글 업로드 부분</h1>
        </body>
    </html>
    
    
        </>
        )
    }
    