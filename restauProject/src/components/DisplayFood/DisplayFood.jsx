import { useContext } from 'react'
import './DisplayFood.css'
import { contextS } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

// eslint-disable-next-line react/prop-types
const DisplayFood = ({meal}) => {
  const {food_list} = useContext(contextS);
  return (
    <div id='dishes' className='DisplayFood'>
       <h2>Top dishes near you</h2>
       <div className="food-disp-list">
        {food_list.map((item)=>{
          if(meal ==="All" || meal===item.category){
            return <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} />
          }


        })}
       </div>

    </div>
  )
}

export default DisplayFood