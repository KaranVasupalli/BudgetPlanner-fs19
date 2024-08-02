import React, { useContext } from "react";
import UserContext from "./ContextApi/UserContext";

function Price() {
  // console.log(expenses);
  const { expenses, setExpenses } = useContext(UserContext) ;
  const price = 10000;

  let total = price - expenses;

  return (
    <>
      <div>
        <p className="p-4 bg-red-400 text-[#fefffe] px-8 text-lg font-medium mt-5 rounded-lg">Budget: Rs.{price}</p>
      </div>
      <div>
        <p className="p-4 bg-red-400 px-8 text-lg font-medium  mt-5 rounded-lg text-[#ffff]">Remaining: Rs.{total}</p>
      </div>
      <div>
        <p className="p-4 bg-red-400  text-white px-8 text-lg font-medium  mt-5 rounded-lg " >Spent so far:{expenses}</p>
      </div>
    </>
  );
}

export default Price;
