import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio-page/Portfolio'
import Notfound from './components/Notfound-Folder/Notfound'
import Resume from './components/Resume-Folder/Resume'
import Project from './components/Project-folder/Project'
import Contact from './components/Contact-folder/Contact'
import Adminlogin from './components/AdminLogin/Adminlogin'
import AdminRegister from './components/Register/AdminRegister'
import Admindashboard from './components/AdminDashboard/Admindashboard'
import Uploadpage from './components/Upload-folder/Uploadpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/adminregister' element={<AdminRegister/>}/>
        <Route path='/admindb' element={<Admindashboard/>}/>
        <Route path='/upload' element={<Uploadpage/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App
