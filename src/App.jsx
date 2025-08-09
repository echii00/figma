import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Botao from './components/Botao/Botao'
import Header from './components/Header/Header'
import Home from './pages/Home/home'
import Contato from './pages/contato/contato'


export default function App(){
  return(
    <>
    <Botao/>

    <Router>
      <Header/>

      <Routes>

        <Route path="Home" element={<Home/>}/>
        <Route path="Contato" element={<Contato/>}></Route>
        

      </Routes>
    </Router>
    
    </>
  )
}
