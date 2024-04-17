import { createContext, useState } from "react";
import { food_list } from '../assets/assets'; // Assuming food_list is a named export from '../assets/assets'

// eslint-disable-next-line react-refresh/only-export-components
export const contextS = createContext(null);

const StoreContext = (props) => {

  const [cartItem,setcartItem] = useState({});
  const [image,setImage]=useState("");
  const [price,setprice]=useState(-1);
  const [name,setName]=useState("");
  const [desc,setdesc]=useState("");
  const [catego,setcatego]=useState("");
  const [hide,setHide]=useState(false);
  const [row,setrow]=useState(-1)
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
    image,
    setImage,
    name,
    setName,
    desc,
    setdesc,
    price,
    setprice,
    hide,
    setHide,
    setcatego,
    catego,
    row,
    setrow,
  };

  return (
    <contextS.Provider value={values}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </contextS.Provider>
  );
};

export default StoreContext;
