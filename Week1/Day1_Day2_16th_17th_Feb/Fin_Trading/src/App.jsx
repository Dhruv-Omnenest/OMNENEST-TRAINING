import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Auth from './components/auth/Auth.jsx'
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
