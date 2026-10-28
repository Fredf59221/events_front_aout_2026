

import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Homepage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import EventsPage from './Pages/EventsPage'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      {/* path = chemin d'acces sur le navigateur*/}
      {/* Element = composant afficher pour la route associee*/}
      
      <Route path ='/' element={<Homepage/>}/>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/events' element={<EventsPage/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
