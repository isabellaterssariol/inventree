import { useAuth } from "../../context/auth-firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserLogoutMenu from "../user-logout";

export default function Header() {
  const { user, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex items-center justify-between p-1 pb-1 bg-gray-100 shadow-md">
      <Link to="/" className="flex items-center">
        <img
          src="../../assets/inventree_icon.png"
          alt="Inventree Icon"
          className="h-20 w-20"
        />
        <p className="text-primary-dark font-poppins text-xl">InvenTree</p>
      </Link>

      <UserLogoutMenu
        user={user}
        userMenuOpen={userMenuOpen}
        setUserMenuOpen={setUserMenuOpen}
        handleLogout={handleLogout}
      />
    </header>
  );
}
