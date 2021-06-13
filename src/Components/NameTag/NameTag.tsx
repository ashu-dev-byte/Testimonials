import React from "react";

interface Props {
  name: string;
}

const nameTag: React.FC<Props> = (props) => {
  return <h2 className="text-lg text-center">{props.name}</h2>;
};

export default nameTag;
