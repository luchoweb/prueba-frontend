import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const signIn = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user.uid;
  } catch (err: any) {
    return err.message;
  }
};

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);
