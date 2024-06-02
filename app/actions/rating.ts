"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const addRating = async (rate: number, gameId: number) => {
  console.log("DATA FROM THE RATING FORM ", { rate, gameId });

  try {
    const data = await sql`
            INSERT INTO rating (rating, game_id)
            VALUES(${rate}, ${gameId})
            RETURNING *
        `;
    console.log("RATINGS DATA: ", data.rows[0]);
  } catch (error) {
    console.log("Error adding ratings", error);
  }

  revalidatePath("/");
};

export const getAvgRating = async (gameId: number) => {
  try {
    const data = await sql`
        SELECT ROUND(AVG(rating), 1) as avg_rate FROM rating WHERE game_id = ${gameId}
    `;
    console.log("AVG RATE: ", data.rows[0].avg_rate);
    return data.rows[0].avg_rate;
  } catch (error) {
    console.log("Error getting Avg Rating", error);
  }
};
