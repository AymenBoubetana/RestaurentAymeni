import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div id='Footer' className='Footer'>
      <div className="infosF">
        <div className="sid1">
          <img className='sid1Img' src={assets.aymeni} alt="" />
          <p>Lorem i
            psum dolor sit amet consectetur adipisicing elit. Odio, perspiciatis. Laborum animi cum nisi nostrum iste sint assumenda?</p>
            <div className="links">
              <a href=""><img src={assets.facebook_icon} alt="" /></a>
              <a href=""><img src={assets.twitter_icon} alt="" /></a>
              <a href="">  <img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="side2">
          <h3>GET IN TOUCH</h3>
          <div className="paraF">
            <p>+212 648508416</p>
            <p>boubetana.aymen@gmail.com</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        Copyright 2024 &copy; Aymeni.com- All right Reserved
      </div>
      
    </div>
  )
}

export default Footer