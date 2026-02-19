import Counter from './components/counter'
import FocusInput from './components/FocusInput'
import NameSaver from './components/NameSaver'
import NavBar from './components/NavBar'
import PreviousValue from './components/PreviousValue'
import ThemePage from './components/ThemePage'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'

function App() {
 
  return (
      <ThemeProvider>
      <UserProvider>
        <NavBar/>
        <ThemePage/>
        <Counter/>
        <NameSaver/>
      </UserProvider>
     </ThemeProvider>
  )
}

export default App
