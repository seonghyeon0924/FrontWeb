import React from 'react'
import './MainForm.css';
// import {Button, Input} from 'semantic-ui-react'
// import logo from '.image/logo.jpg';

export default function MainForm() {
    return (
    <>
<html>
        <div className="page">
            <header>
                 <div className="logo">
                    {/* 왼쪽에 로고넣기 */}
                    <img src ="/image/logo22.png" className="logos"/>
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
        <body>
        {/* 전체적인 피드 보이는 구간 */}
            <div className="feed">

            {/* 유저 하나의 피드 */}
            <div className="usercontents">

            {/* 업로더 이름 */}
                <div className="username">
                <img src="image/profi1.jpg" className="profile"></img>
                    <p className="nickname">OMG</p>  
                    <br></br>      
                </div>
                <hr className="line"></hr>
                <div className="titles">
              {/* 게시물 본문 */}
              <p className="title">엄청나고 굉장한 음악</p> 
              </div>

                {/* 음악 게시물  */}
                <div className="Music">
                    <audio src ="sound/sound1.mp3" controls autoPlay loop></audio>
                </div>
            </div>
            </div>  
           
                {/* <div className="info">
                    <p>팀 명 등등</p>
                </div> */}
    </body>
</html>


    </>
    )
}
