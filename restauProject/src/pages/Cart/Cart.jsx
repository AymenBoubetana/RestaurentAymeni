import { useContext } from 'react'
import './Cart.css'
import { contextS } from '../../context/StoreContext'
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const {food_list,cartItem,removeFromCart,addTotalBill} = useContext(contextS);
  const navigate = useNavigate()
  return (
    <div className='Cart'>
      <div className="cart-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quatity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="cart-title-parent">
       {
        food_list.map((item,index)=>{
              if(cartItem[item._id]>0){
                return(
                  <>
                <div key={index} className="cart-title cart-details">
                   <img src={item.image} alt="" />
                   <p>{item.name}</p>
                   <p>${item.price}</p>
                   <p>{cartItem[item._id]}</p>
                   <p>${item.price*cartItem[item._id]}</p>
                   <p className='remove' onClick={()=>removeFromCart(item._id)}>X</p>
              </div>
              <hr className='cart' />
              </>
                );
              }
        })
       }
      </div>
      <div className="twosidesCart">
        <div className="side1Cart">
          <h2>Cart Totals</h2>
          <div className="side1Sub">
            <p>Subtotal</p>
            <p>${addTotalBill()}</p>
          </div>
          <hr className='ro' />
          <div className="side1Sub">
            <p>Delivery Fee</p>
            <p>${addTotalBill()===0?0:2}</p>
          </div>
          <hr className='ro' />
          <div className="side1Sub">
            <p>Total</p>
            <p>${addTotalBill()===0?0:2+addTotalBill()}</p>
          </div>
          <button onClick={()=>navigate("/order")} type='submit'>Proceed to checkout</button>
        </div>
        <div className="side2Cart">
          <p>if you have a promo code,Enter it here</p>
          <input type="text" placeholder='Enter here'/>
          <button type='submit'>submit</button>
        </div>
      
      </div>
    </div>
    
  )
}

export default Cart