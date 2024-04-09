/* eslint-disable react/prop-types */
import './ExploreMenu.css';
import {menu_list} from '../../assets/assets';

const ExploreMenu = ({ meal ,setmeal }) => {
  return (
    <div id='ExploreMenu' className='ExploreMenu'>
       <div className="contentE">
       <h3>Explore our menu</h3>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nemo optio rerum?
         <br/> Quisquam sunt reiciendis reprehenderit blanditiis quaerat aliquam sapiente?</p>
       </div>
       <div className="items">
        {menu_list.map((item,key)=>{
          return <div onClick={()=>setmeal(prev => prev===item.menu_name?"All":item.menu_name)} key={key} className="item">
                    <img src={item.menu_image} className={meal===item.menu_name?"Active":''} alt="" />
                    <p >{item.menu_name}</p>
          </div>
      
        })}
       </div>
       <hr />

    </div>
  )
}

export default ExploreMenu