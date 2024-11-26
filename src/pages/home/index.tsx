import Header from "../../components/header";
import Search from "../../components/search";
import { useAuth } from "../../context/auth-firebase";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="home">
      <Header />
      <div className="user-info mt-6 mb-8 pl-4 pr-4">
        <p className="text-secondary text-base">
          Hi, {user?.displayName || "User"}
        </p>
        <p className="text-primary text-2xl font-semibold">
          Let's organize your products!
        </p>
        <Search />
      </div>
    </div>
  );
}
