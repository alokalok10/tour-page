import React, { useRef } from "react";
import "./Marquee.css"; // Import your CSS file for styling


function Marquee() {
  const marqueeRef = useRef();

  const handleMouseOver = () => {
    marqueeRef.current.classList.add("paused");
  };

  const handleMouseOut = () => {
    marqueeRef.current.classList.remove("paused");
  };

  return (
    <div
      className="marquee-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="marquee" ref={marqueeRef}>
       
        “Welcome to Demetrix Tourism, where every journey is an adventure waiting to be discovered. Explore the rich cultural tapestry of India, from the bustling streets of Delhi to the serene backwaters of Kerala. Let us be your guide as you embark on a voyage of discovery, where each destination promises to captivate your senses and leave you with memories to last a lifetime. Start your journey with us today and unlock the magic of travel with Demetrix Tourism.”
      </div>
    </div>
  );
}

export default Marquee;
