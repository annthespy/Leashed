import React from "react";
import Dog from "./Dog.js";

const Dogs = ({ dogs }) => {
  return (
    <table className="dogs">
      <tr>
        <th>Photo</th>
        <th>Breed Name</th>
        <th>Breed group</th>
        <th>Bred for</th>
        <th>Breed group</th>
        <th>Temperament</th>
        <th>Life span</th>
        <th>Weight lbs</th>
      </tr>
      {dogs.map((dog, i) => (
        <Dog dog={dog} key={i} />
      ))}
    </table>
  );
};

export default Dogs;
