import React from "react";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import "./Testimonial.css";

interface Props {
  imgURL: string;
  name: string;
}

const testimonial: React.FC<Props> = (props) => {
  return (
    <div className="">
      <div className="flex justify-center">
        <Avatar url={props.imgURL} />
      </div>
      <div className="flex justify-center">
        <Card name={props.name}>{props.children}</Card>
      </div>
    </div>
  );
};

export default testimonial;
