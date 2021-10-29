import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacto from './pages/Contacto'
import Proyectos from './pages/Proyectos'
const App = () =>{
  return(
    <BrowserRouter>
          <Switch>
            <Route  exact path="/" component={Home}/>
            <Route  path="/contacto" component={Contacto} />
            <Route  path="/proyectos" component={Proyectos} />
          </Switch>
      </BrowserRouter>
  )
}

export default App