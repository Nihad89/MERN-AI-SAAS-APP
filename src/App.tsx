import {Header} from './assets/components/header';
import {Routes, Route} from 'react-router-dom';
import { Home } from './assets/pages/Home';
import { Login } from './assets/pages/Login';
import { NotFound } from './assets/pages/NotFound';
import { Signup } from './assets/pages/Signup';
import { Chat } from './assets/pages/Chat';
import { createTheme, ThemeProvider } from '@mui/material';
import { useAuth } from './context/AuthContext';


function App() {
  
  
  return (
  <main>
    <Header/>
     <Routes>
      <Route path="/"element={<Home />}/>
      <Route path="/login"element={<Login />}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/chat" element={<Chat />} />
     </Routes>

  </main>)
}

export default App
