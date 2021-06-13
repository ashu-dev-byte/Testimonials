import React from "react";
import "./Avatar.css";

interface Props {
  url: string;
}

const avatar: React.FC<Props> = (props) => {
  return (
    <img
      className="h-32 w-32 my-5 object-cover rounded-full custom-shadow relative dive z-20"
      src={props.url}
      alt="Person"
    />
  );
};

export default avatar;
