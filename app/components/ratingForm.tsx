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
    <form onSubmit={handleSubmit} className="mt-4">
      {voted == false && (
        <div className="flex flex-col items-start space-y-4">
          <select
            className="bg-white text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value={0}>Rate game </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          {rate > 0 && (
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold rounded-lg p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Rate game
            </button>
          )}
        </div>
      )}
    </form>
  );
}
