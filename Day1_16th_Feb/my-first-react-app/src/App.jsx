import App2 from './components/App2'
import './App.css'
import Button from './components/button'
import { BrowserRouter as BroswerRouter, Routes, Route } from 'react-router-dom'
import Toc from './components/toc'
function App() {
  return (
    <BroswerRouter> 
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="/Toc" element={<Toc />} />
      </Routes>
      
      <App2 />  
      <Button />
    </BroswerRouter>
  )
}

export default App;