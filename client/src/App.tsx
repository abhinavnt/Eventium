import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserRoute from './routes/UserRoute'

function App() {

  return (
   <BrowserRouter>
   <Routes>
     <Route path='/*' element={<UserRoute/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
