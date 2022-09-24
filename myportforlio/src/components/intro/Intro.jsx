import "./intro.css"
import Chebu from "../../img/portrait.png"

const Intro = () =>{
return(
  <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro">Hi, my name is</h2>
        <h1 className="i-name"> JINSHENG ZHAO</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Traveller</div>
            <div className="i-title-item">Translator</div>
            <div className="i-title-item">Photographer</div>
            <div className="i-title-item">Linguist</div>
          </div>
        </div>
        <div className="i-desc">
          I like building things with the latest web development tech stack and am working
          to move into the tech field. Now I am focused on Javascript and React.
        </div>
      </div>
    </div>

    <div className="i-right">
       <img src={Chebu} className="i-img" alt="chebu"></img>
    </div>
  </div>

  )
}

export default Intro
