import Header from "../../components/header";
import Search from "../../components/search";
import { useAuth } from "../../context/auth-firebase";
import CategoryNav from "../../components/category-nav";
import CategoryStore from "../../components/category-store";

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="home">
      <Header />
      <section className="user-info mt-6 mb-8 pl-4 pr-4">
        <p className="text-secondary text-base">
          Hi, {user?.displayName || "User"}
        </p>
        <p className="text-primary text-2xl font-semibold">
          Let's organize your products!
        </p>
        <Search />
      </section>

      <section className="bg-gray-100 rounded-t-3xl mt-6 mb-8 pl-4 pr-4 pt-6 pb-6">
        <CategoryNav />
        <CategoryStore />
      </section>
    </main>
  );
}
