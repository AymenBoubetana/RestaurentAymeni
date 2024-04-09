import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import SignPopup from "./components/SignPopup/SignPopup"

const App = () => {
  const [ShowSign,setShowSign] = useState(false)
  return (
  <>
  {ShowSign? <SignPopup setShowSign={setShowSign} />:''}
    <div className="app">
        <Navbar setShowSign={setShowSign}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
        </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App