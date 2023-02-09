import { Chat } from "../components/Chat/Chat";
import Login from "../components/Login/Login";

export const routes = {
  chat: {
    path: "/chat",
    component: Chat,
    exact: true,
    titleMessage: "appName",
    private: false,
    alias: "analytics",
  },

  login: {
    path: "/",
    component: Login,
    exact: true,
    titleMessage: "appName",
    private: false,
    alias: "analytics",
  },
};
