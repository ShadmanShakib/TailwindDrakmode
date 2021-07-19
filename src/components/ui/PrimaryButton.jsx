import React from "react";

function PrimaryButton(props) {
  return (
    <button
      onSubmit={props.onSubmit}
      type={props.type}
      className="rounded-lg bg-btnbg dark:text-white dark:bg-green-500 hover:bg-btn hover:text-btnbg dark:hover:bg-green-400 transition duration-100 text-btn font-semibold shadow-md w-40 h-11 "
    >
      {props.title}
    </button>
  );
}

export default PrimaryButton;
