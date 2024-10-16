
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import NotFound from "./pages/NotFound"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Post from "./pages/Post"
import Testes from "./pages/Testes"
import Usuario from "./pages/Usuario"
import Navbar from "./components/Navbar"
import ToDo from "./pages/ToDo"


function App() {

  return(
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon" element={<ProtectedRoutes><Pokemon/></ProtectedRoutes>} />
        <Route path="/post" element={<ProtectedRoutes><Post/></ProtectedRoutes>} />
        <Route path="/testes" element={<Testes/>} />
        <Route path="/todo" element={<ToDo/>} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )

}

export default App

