import React from "react";
import { getAllGames } from "@/app/actions/game";
import RatingForm from "./ratingForm";
import RatingAvg from "./ratingAvg";
export default async function Games() {
  const games = await getAllGames();
  console.log("GAMES FROM PAGE", games);
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {games?.map((game) => {
        return (
          <div className=" bg-stone-500 rounded-2xl p-4 m-3" key={game.id}>
            <h2>{game.title}</h2>
            <p>Studio: {game.studio}</p>

            <img
              className=" w-max object-cover rounded-lg shado"
              src={game.image}
              alt=""
            />
            <p>
              {game.description} <br />
            </p>
            <a target="_blank" href={game.www}>
              {game.title + " Website"}
            </a>
            <p>
              Release date:{" "}
              {new Date(game.release_date).toLocaleDateString("pl-PL", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>

            <p>Game type: {game.game_type}</p>
            <RatingAvg gameId={game.id as number} />
            <hr />
            <RatingForm gameId={game.id as number} />
          </div>
        );
      })}
    </div>
  );
}
