import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const UserContext = createContext({});

export function UserProvider({ children }) {
  function searchUser(name) {
    api
      .get(`/users/${name}`)
      .then((res) => {
        console.log("RESULT: ", res.data);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }

  return (
    <UserContext.Provider value={{ searchUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
