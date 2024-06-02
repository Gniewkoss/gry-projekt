"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

// ADD NEW COMPANY
export const addCompany = async (formData: FormData) => {
  const companyName = formData.get("company_name") as string;
  const website = formData.get("website") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // console.log("company name:", companyName);
  // console.log("website:", website);
  // console.log("email:", email);
  // console.log("password:", password);

  let ok = false;
  try {
    const data = await sql`
      INSERT INTO company (name, www, password, email) 
      VALUES (${companyName}, ${website}, ${password}, ${email})
      RETURNING *
    `;

    console.log("INSERTING DATA:", data);
    ok = true;
  } catch (error) {
    console.error("Adding to DB failed ", error);
  }
  if (ok) {
    redirect("/login");
  }
};

// GET ALL COMPANIES
export const getAllCompanies = async () => {
  try {
    const data = await sql`SELECT * FROM company`;
    console.log("FETCHING DATA:", data.rows);
    return data.rows;
  } catch (error) {
    console.error("Fetching data failed ", error);
  }
};
