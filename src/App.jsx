import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio-page/Portfolio'
import Notfound from './components/Notfound-Folder/Notfound'
import Resume from './components/Resume-Folder/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App