import { createContext, useState, useEffect } from "react";
import getUsers from "../services/users-service";

export const usersContext = createContext();

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState();
  useEffect(() => {
    getUsers().then((res) => setUsers(res))
    
  }, []);

  return (
    <usersContext.Provider value={{ users, setUsers }}>
      {children}
    </usersContext.Provider>
  );
}
