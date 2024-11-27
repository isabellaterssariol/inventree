import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="flex flex-col items-center justify-center mt-40 text-center">
      <img
        src="../../assets/error_icon.png"
        alt="Error Illustration"
        className="w-60 h-60"
      />

      <h1 className="text-2xl font-bold text-primary-dark mt-6">
        Oops! Something went wrong
      </h1>
      <p className="text-secondary-dark font-poppins mt-2">
        Back to the home page to catalog more products
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-primary text-white rounded-md shadow hover:bg-primary-dark transition"
      >
        Go to Home
      </Link>
    </main>
  );
}
