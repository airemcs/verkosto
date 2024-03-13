import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState(null);

  return (
    <MyContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </MyContext.Provider>
  );
};
