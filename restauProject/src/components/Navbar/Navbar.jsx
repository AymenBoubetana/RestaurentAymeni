import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { useContext, useState } from 'react'
import { Link} from 'react-router-dom'
import { contextS } from '../../context/StoreContext.jsx'
import files from '../../assets/aymeni.png'
// eslint-disable-next-line react/prop-types
const Navbar = ({setShowSign}) => {
  const [menu,setmenu] = useState("Home");
  const {addTotalBill}=useContext(contextS);
  return (
    <div id='Navbar' className="Navbar">
      <Link to={'/'}><img src={files} alt="" /></Link>
      <ul>
        <a href="#Navbar"><li onClick={()=>setmenu("Home")} className={menu=="Home"?"active":""}>Home</li></a>
        <a href="#dishes"><li onClick={()=>setmenu("Menu")} className={menu=="Menu"?"active":""}>Menu</li></a>
        <a href="#DownloadApp"><li onClick={()=>setmenu("Mobile-app")} className={menu=="Mobile-app"?"active":""}>Mobile-app</li></a>
        <a href="#Footer"><li onClick={()=>setmenu("Contact us")} className={menu=="Contact us"?"active":""}>Contact us</li></a>
        <Link to={'/admin'}><li onClick={()=>setmenu("admin")} className={menu=="admin"?"active":""}>Admin</li></Link>
      </ul>
      <div className='sign'>
        <img src={assets.search_icon} alt="" />
        <div className="search-icon-navbar">
        <Link to={'/cart'} ><img src={assets.basket_icon} alt="" /></Link>
        <div className={addTotalBill()===0?'':'dot'}></div>
        </div>
        <button onClick={()=>setShowSign(true)}>
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar