import React from 'react'
import './MypageForm.css';



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
                    <img src ="/image/logo22.png" className="logos"/>
                 </div>
              {/* 로그인, 비로그인 일 때 메뉴 다르게 하기 */}
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
                    <input type="text" class="text-field" placeholder="검색어 입력"></input>
               </div>
            </header>
            </div>

            <body>
            <div className="myprofile">

                <h1>Mypage</h1>
                <div className="curproflie">
                    {/* 프로필 */}
                    <div className="nick">
                        <img src="image/profi1.jpg" className="profileimg"></img>
                        <p className="currnickname">  현재 닉네임 : 도성경</p>
                        
                    </div>


                    <div className="nickname">
                    {/* 닉네임 수정 */}
                    
                    <input type="submit" value="변경" class="resubmit"></input>
                    <input type="text" name="nickname" class="text-field" placeholder="변경할 닉네임"></input>
                    
                    </div>
                    </div>
                    

                    <div className="mybtn">

                    {/* 음악관심사 수정 */}
                    <div className="musiclike">
                        {/* 리스트로 체크 제작*/}
                    </div>
                </div>

                
                <div className="구독 정보">
                    {/* 구독한 사람들 모음 */}
                    <div className="sublist">
                        {/* 구독 리스트 제작 */}
                        {/* 프로필사진, 이름, 링크 */}
                    </div>
                </div>

                <div className="myupload">
                    {/* 내가 올린 게시물  */}
                    {/* 피드처럼 만들기 */}
                    </div>

                </div>

            </body>














        

        </>
    )
}