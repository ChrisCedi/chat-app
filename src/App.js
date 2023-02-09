import React, { useContext } from "react";
import { ChatContext } from "./context/ChatProvider";
import Login from "./components/Login/Login";
import { Chat } from "./components/Chat/Chat";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./themeConfig";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";

const App = () => {
  const { user } = useContext(ChatContext);

  return <Navigation />;
};

export default App;
