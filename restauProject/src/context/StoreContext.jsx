import { createContext, useState } from "react";
import { food_list } from '../assets/assets'; // Assuming food_list is a named export from '../assets/assets'

// eslint-disable-next-line react-refresh/only-export-components
export const contextS = createContext(null);

const StoreContext = (props) => {

  const [cartItem,setcartItem] = useState({});

  const addTocart =(itemId)=>{
    if(!cartItem[itemId]){
      setcartItem((prev)=>({...prev,[itemId]:1}))
    }else{
      setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart=(itemId)=>{
    setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const addTotalBill=()=>{
    let totalAmount=0;
    for(const item in cartItem){
    if(cartItem[item]>0){
      let itemInfo=food_list.find((product)=>product._id===item);
      totalAmount+=itemInfo.price * cartItem[item];
    }
    }
    return totalAmount;
  }


  const values = {
    food_list,
    cartItem,
    setcartItem,
    addTocart,
    removeFromCart,
    addTotalBill,
  };

  return (
    <contextS.Provider value={values}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </contextS.Provider>
  );
};

export default StoreContext;
