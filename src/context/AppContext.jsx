import React, { createContext, useRef, useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const linksRef = useRef(null);
  const buildingRef = useRef(null);
  const closeRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    linksRef.current.classList.remove("active");
    buildingRef.current.classList.remove("active");
    closeRef.current.classList.remove("active");
  };
  //
  const [propertyDetails, setPropertyDetails] = useState({});
  //
  const backendAPI = "https://server-application.onrender.com";
  return (
    <AppContext.Provider
      value={{
        propertyDetails,
        setPropertyDetails,
        scrollToTop,
        linksRef,
        buildingRef,
        closeRef,
        backendAPI,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
