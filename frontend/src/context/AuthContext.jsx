import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// IMPORTANT: Your backend does NOT use /v1
const basePath = "https://jumpstart-backend.alwaysdata.net/api/v1";

// Read stored user safely
const getStoredUser = () => {
  try {
    const saved = localStorage.getItem("user");
    if (!saved || saved === "undefined") return null;
    return JSON.parse(saved);
  } catch {
    return null;
  }
};

// Read stored token
const getStoredToken = () => {
  const saved = localStorage.getItem("token");
  if (!saved || saved === "undefined") return "";
  return saved;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser());
  const [token, setToken] = useState(getStoredToken());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const u = getStoredUser();
    const t = getStoredToken();

    if (u && t) {
      setUser(u);
      setToken(t);
    }
    setLoading(false);
  }, []);

  // ✅ FIXED LOGIN FUNCTION BASED ON YOUR BACKEND RESPONSE
  const login = async ({ email, password }) => {
    const res = await fetch(`${basePath}/user/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("LOGIN RESPONSE:", data);

    // Backend sends success = false on invalid
    if (!data.success) {
      throw new Error(data.msg || "Login failed");
    }

    // 🔥 Correct mapping from your response:
    // {
    //   success: true,
    //   data: {
    //      user: {...},
    //      auth_token: "xxxxx"
    //   }
    // }
    const userObj = data.data.user;
    const tokenStr = data.data.auth_token;

    if (!tokenStr) {
      throw new Error("No token received");
    }

    // Save user + token
    setUser(userObj);
    setToken(tokenStr);

    localStorage.setItem("user", JSON.stringify(userObj));
    localStorage.setItem("token", tokenStr);

    return data; // Required for redirect in Login.jsx
  };

  // LOGOUT FUNCTION
  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
