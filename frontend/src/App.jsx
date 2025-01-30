import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Nav from './components/nav'
import HomePage from './components/home'
import CreateUser from './components/register'
import LogUser from './components/LoginUser'
function App() {
  const [user,setID]=useState("")
  return (
   <>
      <div className="section">
          <BrowserRouter>
          {
            user&&<Nav user={user}/>
          }
          
            <Routes>
              <Route path="/" element={<HomePage setID={setID}/>} />
              <Route path="/profile" Component={CreateUser}/>
              <Route path="/login" Component={LogUser}/>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
