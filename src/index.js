//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentDate = date.getHours();

let greetings;
const cusstyle = {
  color: ""
};

if (currentDate < 12) {
  greetings = "Good Morning";
  cusstyle.color = "red";
} else if (currentDate > 12 && currentDate < 18) {
  greetings = "Good Afternoon";
  cusstyle.color = "green";
} else {
  greetings = "Good evening";
  cusstyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={cusstyle}>
    {greetings}
  </h1>,
  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
