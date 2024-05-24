import React, { useState } from "react";
import CompareIcon from "./CompareIcon";

const CompareButton = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  const buttonGradient = clicked
    ? "linear-gradient(129deg, #F8D448 0%, #C9A003 100%)"
    : "white";

  const iconColor = clicked ? "white" : "rgba(248, 212, 72, 1)";

  return (
    <div>
      <button
        style={{
          background: buttonGradient,
        }}
        className="btn custom-btn  rounded-circle w-auto hover-shadow  h-auto  d-flex flex-shrink-0 p-3  align-items-center"
        onClick={handleClick}
      >
        <CompareIcon color={iconColor} />
      </button>
    </div>
  );
};

export default CompareButton;
