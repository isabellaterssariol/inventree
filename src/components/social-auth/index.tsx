import { useAuth } from "../../context/auth-firebase";
import { useNavigate } from "react-router-dom";

export default function SocialAuth() {
  const { signInWithGoogle, signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  const handleFacebookLogin = async () => {
    await signInWithFacebook();
    navigate("/");
  };

  return (
    <>
      <p className="flex items-center text-center my-6 text-secondary">
        <span className="flex-grow border-t border-gray-300 mx-2"></span>
        <span>Or</span>
        <span className="flex-grow border-t border-gray-300 mx-2"></span>
      </p>

      <div className="flex justify-center">
        <button
          onClick={handleGoogleLogin}
          className="w-13 h-13 bg-white border-none rounded-lg m-10 mx-3 cursor-pointer shadow-md hover:shadow-lg transition duration-300"
        >
          <img src="../../assets/google_auth.png" alt="Google Icon" />
        </button>

        <button
          onClick={handleFacebookLogin}
          className="w-13 h-13 bg-white border-none rounded-lg m-10 mx-3 cursor-pointer shadow-md hover:shadow-lg transition duration-300"
        >
          <img src="../../assets/facebook_auth.png" alt="Facebook Icon" />
        </button>
      </div>
    </>
  );
}
