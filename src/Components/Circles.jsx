import React, { useState } from 'react';

const Circletask = () => {
  const [circle, setCircle] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = (e) => {
    if (circle.length >= 2) {
      setBackgroundColor("white");//need to chanege the color
      setCircle([]); // Reset circles if there are already 2 circles
      return;
    }

    console.log(e); // Logs the event object (e) to the console.

    const radius = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    console.log(radius);

    const newCircle = {
      x: e.clientX,
      y: e.clientY,
      radius,//radius that we created recenltyy
    };

    console.log(newCircle.x, radius); // Logs the new circle's coordinates and radius of x
    console.log(newCircle.y, radius); // Logs the new circle's coordinates and radius of y
    // Check for intersection with existing circles
    const intersects = circle.some((existingCircle) => {
      const nx = newCircle.x - existingCircle.x; // (x2 - x1)
      const ny = newCircle.y - existingCircle.y; // (y2 - y1)
      const dist = Math.sqrt(nx * nx + ny * ny); // Calculate distance
      return dist < newCircle.radius + existingCircle.radius; // Check for intersection
    });

    if (intersects) {
      setBackgroundColor("red"); // Set background to red when circles intersect
    } else {
      setBackgroundColor("white"); // Set background to white when no intersection
    }

    setCircle((prevValues) => [...prevValues, newCircle]); // Add the new circle to the array

    console.log(circle, "this is circle");
    console.log("new formed ,", newCircle.x - newCircle.radius);
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: backgroundColor,
          position: "relative",
        }}
      >
        {circle.map((circ, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: circ.y - circ.radius + "px",
              left: circ.x - circ.radius + "px",
              width: 2 * circ.radius + "px",
              height: 2 * circ.radius + "px",
              borderRadius: "50%",
              backgroundColor: "orange",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Circletask;
