import React, { createContext, useState, useEffect } from "react";
import { db, auth, provider } from "../firebase";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const dataUser = { uid: null, email: null, status: null };
  const [user, setUser] = useState(dataUser);
  const [messages, setMessages] = useState([]);

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
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    auth.signOut();
    localStorage.removeItem("token");
    window.location.reload();
  };

  const loadMessages = () => {
    db.collection("chat2")
      .orderBy("dateMesage")
      .onSnapshot((query) => {
        const responseMessages = query.docs.map((item) => item.data());
        setMessages(responseMessages);
      });
  };

  const addMessage = async (uid, messageInput, name) => {
    try {
      await db.collection("chat2").add({
        dateMesage: Date.now(),
        message: messageInput,
        id: uid,
        username: name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    user,
    messages,
    loginUser,
    logout,
    addMessage,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatProvider;
