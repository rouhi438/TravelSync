import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "../firebase";
const AuthContext = createContext(null);

const authUnavailableError = () =>
  new Error("Authentication is not configured for this environment.");

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth || !isFirebaseConfigured) {
      setLoading(false);
      return;
    }

import { auth } from "../firebase";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  function register(email, password) {
    if (!auth) {
      return Promise.reject(authUnavailableError());
    }

    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    if (!auth) {
      return Promise.reject(authUnavailableError());
    }

    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    if (!auth) {
      return Promise.reject(authUnavailableError());
    }

    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
