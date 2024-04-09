import { useContext } from 'react'
import './Order.css'
import { contextS } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {addTotalBill}=useContext(contextS);
  return (
    <div className='PlaceOrder'>
      <div className="delivery-info">
        <div className="first">
          <input type="text" placeholder='First name' required />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email adress' />
        <input type="text" placeholder='Street' />
        <div className="first">
          <input type="text" name="" id="" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="first">
          <input type="text" name="" id="" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="twosidesCart">
        <div className="side1Cart upp">
          <h2>Cart Totals</h2>
          <div className="side1Sub">
            <p>Subtotal</p>
            <p>${addTotalBill()}</p>
          </div>
          <hr className='ro' />
          <div className="side1Sub">
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr className='ro' />
          <div className="side1Sub">
            <p>Total</p>
            <p>${2+addTotalBill()}</p>
          </div>
          <button type='submit'>Proceed to checkout</button>
        </div>
      
      </div>
    </div>
  )
}

export default PlaceOrder