
import './Add.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { contextS } from '../../context/StoreContext'
import axios from 'axios';
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const Add = ({setHide2}) => {
  const [id,setId]=useState(-1);
  const {setprice,setdesc,setName,setImage,setcatego,image,catego,name,price,desc}=useContext(contextS);
  const handleSubmit=()=>{
    axios
    .post("http://localhost:3000/food_list", {
      id:parseInt(id),
      image: image,
      category:catego,
      name:name,
      price:price,
      description:desc,
    })
    .then((response) => {
      console.log(response.data)
      location.reload()
    });
  }
  return (
  <div className="PopUp">
    <div className="infos">
    <div className="top">
    <h2>Add Item</h2>
    <img onClick={()=>setHide2(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="elemnts">
      <div className="elem">
        <label htmlFor="Id">Id: </label>
        <input  onChange={(e)=>setId(e.target.value)} type="text" id="id" placeholder='Enter id ' />
      </div>
      <div className="elem">
        <label htmlFor="image">image: </label>
        <input  onChange={(e)=>setImage(e.target.value)} type="text" id="image" placeholder='Enter Image url' />
      </div>

      <div className="elem">
        <label htmlFor="Description">Description: </label>
        <input value={desc} onChange={(e)=>setdesc(e.target.value)} type="text" id="Description" placeholder='Enter Description' />
      </div>

      <div className="elem">
        <label htmlFor="Name">Name: </label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="Name" placeholder='Enter Name'/>
      </div>

      <div className="elem">
        <label htmlFor="Price">Price: </label>
        <input onChange={(e)=>setprice(parseInt(e.target.value))} type="text" id="Price" placeholder='Enter Price' />
      </div>
      <div className="elem">
        <label htmlFor="Price">Category: </label>
        <input onChange={(e)=>setcatego(e.target.value)} type="text" id="Price" placeholder='Enter Price' />
      </div>
      <div className="button">
      <button onClick={()=> handleSubmit()} >Save Changes</button>
      </div>
      
    </div>
    </div>
  </div>
  )
}

export default Add