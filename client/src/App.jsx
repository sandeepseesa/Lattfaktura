import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PriceList from './pages/PriceList'

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768) {
  //       setIsActive(true)
  //     }
  //   }

  //   handleResize();

  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [])
  

  return (
    <>
      <div className="App">
        <Navbar side={handleClick} />

        <div className="sidebar-pricelist-container">
          <div>
            {isActive && <Sidebar isActive={isActive} setIsActive={setIsActive}/>}
          </div>
          <div className="pricelist">
            <PriceList />
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
