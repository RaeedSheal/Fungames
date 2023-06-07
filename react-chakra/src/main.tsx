import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Boardgame from './Boardgame.tsx'
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import Boardgamedetails from './boardgamedetails.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/boardgames' element={<Boardgame />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/boardgamedetails' element={<Boardgamedetails />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
