"use client";
import { addRating } from "@/app/actions/rating";

import { useState } from "react";

export default function RatingForm({ gameId }) {
  const [rate, setRate] = useState(0);
  const [voted, setVoted] = useState(false);

  const handleChange = (event) => {
    console.log("dropdown fired");
    setRate(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addRating(rate, gameId);
    setVoted(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      {voted == false && (
        <div>
          <select className="text-black" onChange={handleChange}>
            <option value={0}>Rate game </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          {rate > 0 && (
            <button className="border rounded p-1">Rate game</button>
          )}
        </div>
      )}
    </form>
  );
}
