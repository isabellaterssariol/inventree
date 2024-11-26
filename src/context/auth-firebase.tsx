import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../services/firebaseConfig";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleError = (error: unknown, setError: (message: string) => void) => {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError("An unknown error has occurred");
    }
  };

  const registerWithEmail = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      handleError(error, setError);
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      handleError(error, setError);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error: unknown) {
      handleError(error, setError);
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error: unknown) {
      handleError(error, setError);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error: unknown) {
      handleError(error, setError);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        loginWithEmail,
        registerWithEmail,
        signInWithGoogle,
        signInWithFacebook,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
