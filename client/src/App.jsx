import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PriceList from './pages/PriceList'

function App() {
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    const setByWidth = () => setIsActive(window.innerWidth > 768);
    setByWidth();
    window.addEventListener('resize', setByWidth);
    return () => window.removeEventListener('resize', setByWidth);
  }, []);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsActive(prev => !prev);
    }
  }

  return (
    <>
      <div className="App">
        <Navbar side={handleClick} />

        <div className="sidebar-pricelist-container">
          <div>
            {isActive && <Sidebar isActive={isActive} setIsActive={setIsActive} />}
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
