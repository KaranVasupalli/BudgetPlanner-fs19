import React, { useContext, useState } from "react";
import UserContextProvider from "./ContextApi/UserContextProvider";
import Input from "./Input";
import Price from "./Price";
import UserContext from "./ContextApi/UserContext";

function Budget() {
    const {  expenses, setExpenses, text, setText } = useContext(UserContext);
    
  return (
    <div className="max-w-screen-lg mx-auto mt-16">
      <div>
        <h1 className="text-4xl font-semibold text-center mb-6 text-red-500">
          My Budget Planner
        </h1>
        <div className="flex justify-evenly mb-14 ">
          <Price/>
        </div>
        <h2 className="text-3xl text-center font-medium text-red-500">Expenses</h2>
        <div className="text-green font-medium  mb-14">
          {text.length > 0 ? (
            text.map((item ,idx) => {
              return(
                <div key={idx} className="flex justify-between px-14  bg-red-500 p-2 mt-5 rounded-lg text-white">
                <p>{item.planner}</p>
                <p>{item.cost}</p>
              </div>
              )
            })
          ) : (
            <h2 className="text-red-500  p-2 rounded-xl  text-4xl text-center mt-6">Please Add Budget....</h2>
          )}
        </div>
        <h2 className="text-3xl text-center font-medium mb-14 text-red-500">Add Expenses</h2>
        <Input setText={setText} setExpenses={setExpenses} />
        
      </div>
    </div>
  );
}

export default Budget;
