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
  return (
    <AppContext.Provider
      value={{
        propertyDetails,
        setPropertyDetails,
        scrollToTop,
        linksRef,
        buildingRef,
        closeRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
