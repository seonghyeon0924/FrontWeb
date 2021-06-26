// 게시물 업로드 하는 폼
// 요청 CONTEXT / isPublic
// 응답 BOARD_ID ( 업로드된 게시물 번호 )


import { useState } from "react";
import axios from 'axios';

import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from "react-router";


export default function BoardUpload() {

    let history = useHistory();
    const [CONTEXT , setContext] = useState("");
    
    let [isPublic, setIsPublic] = useState(['true','false']);

    function changeispublic() {
        var newArray = [...isPublic];
        newArray[0] = 'false'
        setIsPublic(newArray);
    }


    // Checkbox
    // const [isPublic, setpassword] = useState("")
    // isPublic true, false 설정하기 찾아봐야함 tlqkf

    

    const onContextHandler = (e) => {
        setContext(e.currentTarget.value);
    }


    // class isPublic extends React.Component {
    //     state = {
    //       checked: false
    //     };
      
    //     handleChange = (e) => {
    //       const { target: { checked } } = e;
    //       this.setState({ checked });
    //       console.log(checked);
    //     };
        
      
      
    //   }
      
      
           

    const formData = new FormData();
    formData.append("CONTEXT", CONTEXT);
    formData.append("isPublic",isPublic);
    // formData.append("isPublic");

    const onUpload = (e) => {
        e.preventDefault();
        axios.post("http://49.50.161.97:8888/accounts/boards", formData, {withCredentials: true})
            .then(res =>
            {
                alert("등록 완료!");
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
                     
                     <div className="top_menu">
                     <Link to="/board">메인피드 </Link>
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
                <form >
                <div className="createboard">
                    <input type="text" name = {CONTEXT} onChange={onContextHandler}></input>
                    <div><button type="button" onClick={changeispublic}>공개 비공개 설정</button>
                    </div>
                    
                    <h1>{isPublic[0]}</h1>
                    {/* <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} ></input> */}

            
                    
                </div>
                </form>
        </body>
    </html>
    
    
        </>
        )
    }
    