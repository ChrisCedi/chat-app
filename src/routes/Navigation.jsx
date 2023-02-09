import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import { useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatProvider";

const Navigation = () => {
  const { user } = useContext(ChatContext);
  const { login, chat } = routes;
  const accessed = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route
          path={login.path}
          element={
            accessed === null ? <login.component /> : <Navigate to="/chat" />
          }
        />
        <Route
          path={chat.path}
          element={accessed ? <chat.component /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
