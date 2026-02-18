import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Portfolio from './components/portfolio'
import Auth from './components/Auth'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
