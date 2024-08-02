import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Budget from "./Compoments/Budget";
import UserContextProvider from "./Compoments/ContextApi/UserContextProvider";
function App() {
  return (
    <>
      <UserContextProvider>
        <Budget  />
      </UserContextProvider>
    </>
  );
}

export default App;
