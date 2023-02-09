import React, { createContext, useState, useEffect } from "react";
import { db, auth, provider } from "../firebase";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const dataUser = { uid: null, email: null, status: null };
  const [user, setUser] = useState(dataUser);

  useEffect(() => {
    handleChangeUser();
  }, []);

  const handleChangeUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          status: true,
          username: user.displayName,
          avatar: user.photoURL,
        });
      } else {
        setUser({
          uid: null,
          email: null,
          status: false,
          username: null,
          avatar: null,
        });
      }
    });
  };

  const loginUser = async () => {
    try {
      const {
        credential: { idToken },
      } = await auth.signInWithPopup(provider);

      if (idToken) {
        localStorage.setItem("token", idToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    auth.signOut();
    localStorage.removeItem("token");
  };

  return (
    <ChatContext.Provider value={{ user, loginUser, logout }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
