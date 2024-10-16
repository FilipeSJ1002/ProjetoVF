import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoutes({children}: any) {
    const {isLoggedIn} = useAuth()

    if(!isLoggedIn) {
      return <Navigate to="/"/>
    }

    return (
      children
    )
  }
  
  export default ProtectedRoutes