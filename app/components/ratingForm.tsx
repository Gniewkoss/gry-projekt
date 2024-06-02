"use client";
import { addRating } from "@/app/actions/rating";

import { SetStateAction, useState } from "react";

export default function RatingForm({ gameId }: { gameId: number }) {
  const [rate, setRate] = useState(0);
  const [voted, setVoted] = useState(false);

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    console.log("dropdown fired");
    const value = parseInt(event.currentTarget.value);
    setRate(value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
