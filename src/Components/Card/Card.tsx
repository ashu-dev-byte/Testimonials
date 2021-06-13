import React from "react";
import NameTag from "../NameTag/NameTag";
import "./Card.css";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Props {
  name: string;
}

const card: React.FC<Props> = (props) => {
  return (
    <div className="size bg-white rounded-lg flex justify-center items-center">
      <div className="para-size absolute mt-10">
        <span>
          <FaQuoteLeft color="rgb(14, 240, 240)" size="1.5em" />
        </span>
        <NameTag name={props.name} />
        <p className="text-center text-gray-600 text-sm mt-4">
          {props.children}
        </p>
        <span className="absolute right-0 bottom-0 z-10">
          <FaQuoteRight color="rgb(14, 240, 240)" size="1.5em" />
        </span>
      </div>
    </div>
  );
};

export default card;
