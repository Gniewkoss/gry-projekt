"use client";

import { addGame } from "@/app/actions/game";
import { useEffect, useState } from "react";

export default function AddNewGame() {
  const [companyId, setCompanyId] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("companyId")) {
      setCompanyId(window.localStorage.getItem("companyId") as string);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className="m-5 mt-40 ">Add new Game to your commpany</h1>

        <form
          action={addGame}
          className="flex flex-col gap-4 bg-gray-200 p-6 sm:p-10 rounded-2xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        >
          <label className="flex flex-col">
            Title
            <input
              name="title"
              type="text"
              required
              className="rounded-lg p-2 mt-1"
            />
          </label>
          <label className="flex flex-col">
            Description
            <input
              name="description"
              type="text"
              className="rounded-lg p-2 mt-1"
            />
          </label>
          <label className="flex flex-col">
            Website
            <input name="www" type="text" className="rounded-lg p-2 mt-1" />
          </label>
          <label className="flex flex-col">
            Image
            <input name="image" type="text" className="rounded-lg p-2 mt-1" />
          </label>
          <label className="flex flex-col">
            Type
            <input
              name="game_type"
              type="text"
              className="rounded-lg p-2 mt-1"
            />
          </label>
          <label className="flex flex-col">
            Release date
            <input
              name="release_date"
              type="date"
              className="rounded-lg p-2 mt-1"
            />
          </label>
          <input
            name="company_id"
            type="number"
            value={companyId}
            required
            hidden
          />
          <button className="bg-green-500 text-white rounded-lg p-2 mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
