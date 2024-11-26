import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-firebase";

const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
