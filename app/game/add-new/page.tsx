"use client";

import { addGame } from "@/app/actions/game";

export default function AddNewGame() {
  console.log("CHECKING LOCAL STORAGE", localStorage.getItem("companyId"));

  return (
    <div>
      <h1>Add Games</h1>
      <div className="flex flex-col items-center justify-center h-screen ">
        <form
          action={addGame}
          className="flex flex-col gap-4 bg-gray-200 p-10 rounded-2xl w-1/2"
        >
          <label>
            Title
            <input name="title" type="text" required />
          </label>
          <label>
            Description
            <input name="description" type="text" />
          </label>
          <label>
            Website
            <input name="www" type="text" />
          </label>
          <label>
            Company id
            <input
              name="company_id"
              type="number"
              value={localStorage.getItem("companyId") as string}
              required
            />
          </label>
          <label>
            Image
            <input name="image" type="text" />
          </label>
          <label>
            Type
            <input name="game_type" type="text" />
          </label>
          <label>
            Release date
            <input name="release_date" type="date" />
          </label>
          <button className="bg-green-500 rounded-lg p-2">Submit</button>
        </form>
      </div>
    </div>
  );
}
