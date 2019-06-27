import React from "react";

const Raibow = WrapperComponent => {
  const colours = ["red", "green", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * 3)];
  const className = randomColour + "-text";

  return props => {
    return (
      <div className={className}>
        <WrapperComponent {...props} />
      </div>
    );
  };
};

export default Raibow;
