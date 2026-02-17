import App2 from './components/App2'
import Button from './components/Button'
import { BrowserRouter as BroswerRouter, Routes, Route } from 'react-router-dom'
import Toc from './components/toc'
import FruitList from './components/fruitlist'
import NameForm from './components/nameform'
import IpoForm from './components/ipoform'
function App() {
  return (
    <BroswerRouter> 
      <Routes>
        <Route path="/" element={<IpoForm />} />
        <Route path="/Toc" element={<Toc />} />
      </Routes> 
    </BroswerRouter>
  )
}

export default App;