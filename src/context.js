import React, { useState, useContext, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <Context.Provider
      value={{
        showSidebar,
        showModal,
        closeModal,
        openModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(Context);
};
