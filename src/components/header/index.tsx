import { User } from "firebase/auth";
import { useAuth } from "../../context/auth-firebase";

export default function Header({}) {
  const { user } = useAuth();

  const getUserPhoto = (user: User | null) => {
    if (user) {
      return user.photoURL || "../../assets/profile_icon.png";
    }
    return "../../assets/profile_icon.png";
  };

  const photoUser = getUserPhoto(user);

  return (
    <header className="flex items-center justify-between p-3 pb-1 bg-gray-100 shadow-md">
      <img
        src="../../assets/menu_burguer.png"
        alt="Menu Burger"
        className="h-6 w-8"
      />
      <img
        src="../../assets/inventree_icon.png"
        alt="Inventree Icon"
        className="h-20 w-20"
      />
      <img
        src={photoUser}
        alt="User Profile"
        className="h-9 w-9 rounded-full"
      />
    </header>
  );
}
