import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoutes({children}: any) {
    const autenticated = true
    const navigate = useNavigate() // Não está sendo usada

    if(!autenticated) {
      return <Navigate to="/"/>
    }

    return (
      children
    )
  }
  
  export default ProtectedRoutes