import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import DisplayFood from '../../components/DisplayFood/DisplayFood'
import DownloadApp from '../../components/DownloadApp/DownloadApp'

const Home = () => {
  const [meal,setmeal]=useState("All")
  return (
    <div className='Home'>
      <Header/>
      <ExploreMenu meal={meal} setmeal={setmeal} />
      <DisplayFood meal ={meal} />
      <DownloadApp/>
    </div>
  )
}

export default Home