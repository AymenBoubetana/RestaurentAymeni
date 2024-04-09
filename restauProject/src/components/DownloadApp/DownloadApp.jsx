import { assets } from '../../assets/assets'
import './DownloadApp.css'

const DownloadApp = () => {
  return (
    <div id='DownloadApp' className='DownloadApp'>
      <hr />
      <h2>
        For Better Experience Download <br/> Aymeni App
      </h2>
      <div className="liensD">
        <a href="">
          <img src={assets.play_store} alt="" />
        </a>
        <a href="">
          <img src={assets.app_store} alt="" />
        </a>
      </div>
    </div>
  )
}

export default DownloadApp