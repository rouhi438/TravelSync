import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  function getStoredUsers() {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  }
  function saveStoredUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  async function register(email, password, name, role) {
    const users = getStoredUsers();

    const exists = users.find((u) => u.email === email);
    if (exists) {
      throw new Error("User already exists");
    }

    const newUser = {
      id: Date.now(),
      email,
      name,
      role,
    };

    saveStoredUsers([...users, newUser]);

    const accessToken = `fake-token-${newUser.id}`;
    persist(accessToken, newUser);
  }
  async function login(email, password) {
    const users = getStoredUsers();

    const existing = users.find((u) => u.email === email);

    if (!existing) {
      throw new Error("Invalid email or password");
    }
    if (!password || password.length < 3) {
      throw new Error("Invalid email or password");
    }
    const accessToken = `fake-token-${existing.id}`;
    persist(accessToken, existing);
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  }

  function persist(accessToken, user) {
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(accessToken);
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
