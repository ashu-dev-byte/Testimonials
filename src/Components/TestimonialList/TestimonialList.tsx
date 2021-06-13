import React from "react";
import Testimonial from "../Testimonial/Testimonial";

interface Props {}

const testimonialList: React.FC<Props> = (props) => {
  return (
    <div className="bottom-div lg:flex justify-evenly mt-8">
      <Testimonial
        imgURL="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
        name="Josephine"
      >
        1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae
        minus debitis voluptas, impedit consectetur eveniet quaerat alias
        facilis pariatur in, rerum laborum quia dignissimos!
      </Testimonial>
      <Testimonial
        imgURL="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        name="Anas Iqbual"
      >
        2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae
        minus debitis voluptas, impedit consectetur eveniet quaerat alias
        facilis pariatur in, rerum laborum quia dignissimos!
      </Testimonial>

      <Testimonial
        imgURL="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        name="Allina Joel"
      >
        3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae
        minus debitis voluptas, impedit consectetur eveniet quaerat alias
        facilis pariatur in, rerum laborum quia dignissimos!
      </Testimonial>
      <Testimonial
        imgURL="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        name="Albert Chirls"
      >
        4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae
        minus debitis voluptas, impedit consectetur eveniet quaerat alias
        facilis pariatur in, rerum laborum quia dignissimos!
      </Testimonial>
    </div>
  );
};

export default testimonialList;
