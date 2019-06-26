import React from "react";

const Raibow = WrapperComponent => {
  const colours = ["red", "pink", "orange"];
  const randomColour = colours[Math.floor(Math.random() * 5)];
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
