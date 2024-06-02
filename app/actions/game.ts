"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addGame = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const www = formData.get("www") as string;
  const company_id = formData.get("company_id") as string;
  const image = formData.get("image") as string;
  const game_type = formData.get("game_type") as string;
  const release_date = formData.get("release_date") as string;

  //   console.log("title:", title);
  //   console.log("description:", description);
  //   console.log("www:", www);
  //   console.log("company_id:", company_id);
  //   console.log("image:", image);
  //   console.log("game_type:", game_type);
  //   console.log("release_date:", release_date);
  let isInsertSucess = false;

  try {
    const data = await sql`
      INSERT INTO game (title, description, www, company_id, image, game_type, release_date) 
      VALUES (${title}, ${description}, ${www}, ${company_id}, ${image}, ${game_type}, ${release_date})
      RETURNING *
    `;
    if (data) {
      isInsertSucess = true;
    }

    console.log("INSERTING DATA:", data);
  } catch (error) {
    console.error("Adding to DB failed ", error);
  }
  if (isInsertSucess) {
    revalidatePath("/");
    redirect("/");
  }
};

export const getAllGames = async () => {
  try {
    const data = await sql`SELECT 
    g.id, 
    g.title, 
    g.description, 
    g.www, 
    g.image, 
    g.game_type, 
    g.release_date, 
    c.name as studio
    FROM game as g
    JOIN company as c ON g.company_id = c.id
    `;
    console.log("FETCHING DATA:", data.rows);
    return data.rows;
  } catch (error) {
    console.error("Fetching data failed ", error);
  }
};
