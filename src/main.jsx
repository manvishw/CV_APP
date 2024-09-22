import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './style/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </StrictMode>,
)
