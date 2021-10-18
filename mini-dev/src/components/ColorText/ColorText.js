import react from "react";

// returns a <span> of text which is the color of the class provided
// provided a floating menu for when the word is hovered over 
function ColorText(props) {
    return (
        <span class={props.class}>{props.text}</span>
      )
  }

export default ColorText;