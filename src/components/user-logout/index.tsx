import { User } from "firebase/auth";
import { UserLogoutProps } from "./types";

export default function UserLogout({
  user,
  userMenuOpen,
  setUserMenuOpen,
  handleLogout,
}: UserLogoutProps) {
    
  const getUserPhoto = (user: User | null) => {
    return user
      ? user.photoURL || "../../assets/profile_icon.png"
      : "../../assets/profile_icon.png";
  };

  const photoUser = getUserPhoto(user);

  return (
    <div className="relative pr-4">
      <img
        src={photoUser}
        alt="User Profile"
        className="h-9 w-9 rounded-full cursor-pointer"
        onClick={() => setUserMenuOpen(!userMenuOpen)}
      />

      {userMenuOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-lg z-50">
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
