import React, { Component } from "react";
import TestimonialList from "./Components/TestimonialList/TestimonialList";
import "./Styles/styles.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-div">
          <h1 className="text-4xl font-color mt-10 text-center">
            Testimonials
          </h1>
        </div>
        <TestimonialList />
      </div>
    );
  }
}

export default App;
