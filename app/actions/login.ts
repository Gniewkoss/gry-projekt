"use server";

import { sql } from "@vercel/postgres";

export const loginCompany = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log("email:", email);
  console.log("password:", password);
  try {
    const data = await sql`
        SELECT * FROM company WHERE email = ${email} AND password = ${password}
        `;
    console.log("LOGIN DATA:", data.rows);
    // Login OK => [{id:1, name: "Firma"}] // length 1
    // Login WRONG => [] // length 0

    if (data.rows.length > 0) {
      // Login OK
      const companyId = data.rows[0].id;
      console.log("COMPANY ID: ", companyId);
      // redirect ("/game/add-new/" + companyId) - NOT VERY SECURE OPTION
      return { login: "SUCCESS", companyId: companyId };
    } else {
      // Login is WRONG so return object:
      return { login: "FAILED" };
    }

    return data.rows;
  } catch (error) {
    console.error("Fetching data failed ", error);
  }
};
