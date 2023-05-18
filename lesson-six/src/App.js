import './App.css';
import './style.css';
import ReactPlayer from "react-player/youtube"
import icon from "./images/defmyc8-7cbff1dd-1506-4bbc-8f24-90201b6ff243.png"
import Likeicon from "./images/hand-thumbs-up-fill.svg"
import { useState } from 'react';


function App() {
  const [btnState, setBtnState] = useState ("#47476b")
  function subBtn () {
    if (btnState === "#b30000" ){
      setBtnState("#47476b")
    }else(
      setBtnState("#b30000")
    )
  }



  const [likeState, setLikeState] = useState (0)


  return (
    <div className="App">
      <section className='Screen'>
        <div className='Player' ><ReactPlayer url={"https://youtu.be/6Gv-GYOf0KI"}/></div>
        <div className='content'>
          <h2 className='title'>COLDEST Moments in NBA</h2>
          <div className='buttons'>
            <div className='icon-wrappper'>
              <a href="https://www.youtube.com/channel/UCjhLWVERQKrrGqrUaEhy5jw"><img src={icon} alt="icon" className='icon'/></a>
              <div className='chanelNames'>
              <h4 className='chanelName'>NBA</h4>
              <p> 14m subscribers</p>
              </div>
              <button onClick={subBtn} style={{backgroundColor:btnState}} className='sub-btn'>Subscribe</button>
            </div>
            <div className='likeBtns'>
            <img src={Likeicon} onClick={()=> setLikeState(likeState + 1)}alt="Like icon" className='Likeicon'/>
            <p className='likeCount'>{likeState}</p>
            </div>
          </div>
          <div className='description'>
              <p className='descriptionParagraf'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium recusandae neque molestias eaque velit dolores debitis, voluptatibus, voluptas necessitatibus sunt nihil quasi. Minima, modi voluptates ab corrupti earum magnam sequi!</p>
            </div>
        </div>
      </section>
     
    </div>
  );
}

export default App;
