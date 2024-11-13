import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio-page/Portfolio';
import Notfound from './components/Notfound-Folder/Notfound';
import Resume from './components/Resume-Folder/Resume';
import Project from './components/Project-folder/Project';
import Contact from './components/Contact-folder/Contact';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminRegister from './components/Register/AdminRegister';
import Admindashboard from './components/AdminDashboard/Admindashboard';
import Uploadpage from './components/Upload-folder/Uploadpage';
import History from './components/History-page/History';
import Protected from './components/ProtectedRoute/Protected';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/adminregister' element={<AdminRegister />} />

        {/* Protect these routes */}
        <Route
          path='/admindb'
          element={
            <Protected>
              <Admindashboard />
            </Protected>
          }
        />
        <Route
          path='/upload'
          element={
            <Protected>
              <Uploadpage />
            </Protected>
          }
        />
        <Route
          path='/history'
          element={
            <Protected>
              <History />
            </Protected>
          }
        />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
