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
      <p className="flex items-center text-center my-4 text-secondary">
        <span className="flex-grow border-t border-primary mx-2"></span>
        <span className="font-poppins text-md text-primary">Or</span>
        <span className="flex-grow border-t border-primary mx-2"></span>
      </p>

      <div className="flex justify-center pb-10">
        <button
          onClick={handleGoogleLogin}
          className="w-12 h-12 bg-white border border-secondary-light rounded-lg mx-4 cursor-pointer shadow-md hover:shadow-lg transition duration-300"
        >
          <img
            src="../../assets/google_auth.png"
            alt="Google Icon"
            className="w-full h-full object-cover rounded-lg"
          />
        </button>

        <button
          onClick={handleFacebookLogin}
          className="w-12 h-12 bg-white border border-secondary-light rounded-lg mx-4 cursor-pointer shadow-md hover:shadow-lg transition duration-300"
        >
          <img
            src="../../assets/facebook_auth.png"
            alt="Facebook Icon"
            className="w-full h-full object-cover rounded-lg"
          />
        </button>
      </div>
    </>
  );
}
