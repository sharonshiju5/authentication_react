import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Nav from './components/nav'
import HomePage from './components/home'
import CreateUser from './components/register'
import LogUser from './components/LoginUser'
function App() {
  
  return (
   <>
      <div className="section">
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={HomePage}/>
              <Route path="/profile" Component={CreateUser}/>
              <Route path="/login" Component={LogUser}/>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
