import { User } from "firebase/auth";

export interface UserLogoutProps {
  user: User | null;
  userMenuOpen: boolean;
  setUserMenuOpen: (open: boolean) => void;
  handleLogout: () => void;
}
