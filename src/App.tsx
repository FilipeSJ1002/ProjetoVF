
import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import NotFound from "./pages/NotFound"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Post from "./pages/Post"
import Testes from "./pages/Testes"
import Usuario from "./pages/Usuario"


function App() {
    const autenticated = true

  return(
    <div>
     <nav>
      <Link to="/">Home</Link>
      {autenticated && <Link to="/pokemon">Pokémon</Link>}
      {autenticated && <Link to="/post">Post</Link>}
      <Link to="/testes">Testes</Link>
      <Link to="/usuario">Usuario</Link>
     </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon" element={<ProtectedRoutes><Pokemon/></ProtectedRoutes>} />
        <Route path="/post" element={<ProtectedRoutes><Post/></ProtectedRoutes>} />
        <Route path="/testes" element={<Testes/>} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )

}

export default App

