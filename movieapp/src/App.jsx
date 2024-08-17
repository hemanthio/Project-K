
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
function App() {


  return (
   
      <div className='w-full h-screen  bg-[#1F1E24]'>
<Routes>
  <Route path='/' element={<Home/>} /> 
</Routes>

      </div>
    
  )
}

export default App
