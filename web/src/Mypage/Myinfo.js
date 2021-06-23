import { Component } from "react";


export default class Myinfo extends Component {
    // usestate로 이름 바꾸기 기능

    render() {
        return (
            <>
                     <h1 className="h1my">Mypage</h1>
                <div className="myprofile">
                    <div className="curproflie">    
                        {/* 프로필 */}
                        <div className="curnick">
                             <img src="image/profi1.jpg" className="profileimg"></img>
                             <p className="currnickname">현재 닉네임 : {this.props.myname}</p>
                        </div>
                    

                            <div className="chnnickname">
                                {/* 닉네임 수정 */}
                                <input type="submit" value="변경" class="resubmit"></input>
                                <input type="text" name="nickname" class="mytext-field" placeholder="변경할 닉네임"></input>
    
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
                        </>
        );
    }
}
