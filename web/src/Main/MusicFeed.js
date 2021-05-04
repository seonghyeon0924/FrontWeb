import { Component } from "react";

class MusicFeed extends Component {
    render() {
        return(
            <>
            <div className="feed">

{/* 유저 하나의 피드 */}
<div className="usercontents">

{/* 업로더 이름 */}
    <div className="uploader">
    {/* 이미지 사용자 별로 변경하기 */}
    <img src="image/profi1.jpg" className="profile"></img>
        <p className="nickname">{this.props.name}</p>  
        <br></br>      
    </div>
    <hr className="line"></hr>


    <div className="titles">
  {/* 게시물 본문 */}
  <p className="title">{this.props.title}</p> 
  </div>



    {/* 음악 게시물  */}
    <div className="Music">
        <audio src ="sound/sound1.mp3" controls autoPlay loop ></audio>
    </div>
</div>
</div>  
            </>
        );
    }
}

export default MusicFeed;
