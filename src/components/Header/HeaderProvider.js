import React, { createContext, useState } from "react";
export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <HeaderContext.Provider value={{ open, handleClose, handleOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};
