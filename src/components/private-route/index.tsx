import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-firebase";
import Header from "../header";
import Footer from "../footer";

const PrivateRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrivateRoute;
