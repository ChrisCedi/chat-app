import React, { createContext, useState, useEffect, useMemo } from "react";
import { db, auth, provider } from "../firebase";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const dataUser = { uid: null, email: null, status: null };
  const [user, setUser] = useState(dataUser);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    handleChangeUser();
  }, []);

  console.log(messages);

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

        loadMessages();
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

  const loadMessages = () => {
    db.collection("chat").onSnapshot((query) => {
      const responseMessages = query.docs.map((item) => item.data());
      setMessages(responseMessages);
    });
  };

  const addMessage = async (uid, messageInput) => {
    try {
      await db.collection("chat").add({
        dateMesage: Date.now(),
        message: messageInput,
        id: uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = useMemo(
    () => ({
      user,
      loginUser,
      logout,
      messages,
      addMessage,
    }),
    [user]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatProvider;
