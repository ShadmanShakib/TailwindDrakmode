import React from "react";

function PrimaryButton(props) {
  return (
    <button
      style={{ color: "#230677", backgroundColor: "#08ffa2" }}
      className="rounded-lg font-semibold w-40 h-11 "
    >
      {props.title}
    </button>
  );
}

export default PrimaryButton;
