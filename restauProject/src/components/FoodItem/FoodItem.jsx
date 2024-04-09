import './FoodItem.css'
import { assets } from '../../assets/assets.js'
import { useContext } from 'react'
import { contextS } from '../../context/StoreContext.jsx';
// eslint-disable-next-line react/prop-types
const FoodItem = ({id,name,description,price,image}) => {
  // const [itemCount,setItemCount] = useState(0);
  const {cartItem,addTocart,removeFromCart}=useContext(contextS);
  return (
    <div className='FoodItem'>
          <div className="i3ayba1">
            <div className='imagesF'>
            <img src={image} alt="" className='Food_img'/>
            {
              !cartItem[id]? <img onClick={()=>addTocart(id)} src={assets.add_icon_white} alt="" className='addBtn' />: 
               <div className="otherF">
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItem[id]}</p>
                  <img onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }

            </div>
            <div className="all">
            <h4>{name}</h4>
            <img src={assets.rating_starts}  />
            </div>
          </div>
          <div className="l3ayba2">
            <p>{description}</p>
            <p className='price'>{price} $</p>
          </div>
    </div>
  )
}

export default FoodItem