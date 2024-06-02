import React from "react";
import { getAllGames } from "@/app/actions/game";
import RatingForm from "./ratingForm";
import RatingAvg from "./ratingAvg";
export default async function Games() {
  const games = await getAllGames();
  console.log("GAMES FROM PAGE", games);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {games?.map((game) => {
        return (
          <div className="bg-stone-500 rounded-2xl p-4 m-3" key={game.id}>
            <h2 className="text-xl font-bold mb-2">{game.title}</h2>
            <p className="font-semibold">
              Studio: <span className="font-normal">{game.studio}</span>
            </p>

            <img
              className="w-full object-cover rounded-lg shadow-lg mb-4"
              src={game.image}
              alt={game.title}
            />
            <p className="mb-4">
              {game.description} <br />
            </p>
            <a
              target="_blank"
              className="text-blue-200 underline mb-4 block"
              href={game.www}
            >
              {game.title + " Website"}
            </a>
            <p className="mb-4">
              <span className="font-semibold">Release date:</span>{" "}
              {new Date(game.release_date).toLocaleDateString("pl-PL", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>

            <p className="mb-4">
              <span className="font-semibold">Game type:</span> {game.game_type}
            </p>
            <RatingAvg gameId={game.id as number} />
            <hr className="my-4" />
            <RatingForm gameId={game.id as number} />
          </div>
        );
      })}
    </div>
  );
}
