import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(0);
  const [text, setText] = useState([]);

  return (
    <UserContext.Provider value={{ expenses, setExpenses, text, setText }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
