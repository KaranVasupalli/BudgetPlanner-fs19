import { useRef, useState } from "react";
import { useContext } from "react";
import UserContext from "./ContextApi/UserContext";
function Input() {

  const { setText, setExpenses } = useContext(UserContext) ;

  const name = useRef();
  const number = useRef();
  const onClickHandler = () => {
    const planner = name.current.value;
    const cost = Number(number.current.value);
    if (planner !== "" && cost !== "") {
      setText((prev) => [...prev, { planner, cost }]);
      setExpenses((prev) => prev + cost);
    } else {
      alert("Please fill the planner");
    }

  };
  return (
    <>
      <div className="flex justify-between gap-5  w-[100%]">
        <div className="w-full">
          <label htmlFor="plan">Name</label>
          <br />
          <input
            className="bg-white border border-red-500 rounded-lg w-full mt-4 py-2 px-3"
            type="text"
            name=""
            id="plan"
            ref={name}
          />
        </div>
        <div className="w-full">
          <label htmlFor="cost">Cost</label>
          <br />
          <input
            className="bg-white border border-red-500 rounded-lg w-full mt-4 py-2 px-3"
            type="number"
            name=""
            id="cost"
            ref={number}
          />
        </div>
      </div>
      <button
        className="py-2 px-8 text-lg font-medium bg-red-500 mt-4 text-white rounded"
        onClick={onClickHandler}
      >
        Save
      </button>
    </>
  );
}

export default Input;
