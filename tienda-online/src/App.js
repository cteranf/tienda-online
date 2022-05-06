import {  Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/nav/nav.component";
import Loguearse from "./routes/loguearse/loguearse.component";
const Comprar = () => {
  return <h1>Hola esta es la pagina comprar</h1>;
}
const App = () => {
    return (
    <Routes>
      <Route path="/" element= { <Navigation></Navigation> }>
        <Route index element={ <Home></Home> } ></Route>
        <Route path="/comprar" element={ <Comprar></Comprar> } ></Route>
        <Route path="/login" element ={ <Loguearse></Loguearse> } > </Route>
      </Route>
      
      
    </Routes>
    )
}

export default App;
