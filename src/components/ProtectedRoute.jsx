import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";

const ProtectedRoute = () => {

    const username = useSelector((state) => state.user.username)

  return username ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute