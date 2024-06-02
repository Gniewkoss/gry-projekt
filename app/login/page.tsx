"use client";

import { useState } from "react";
import { loginCompany } from "@/app/actions/login";
import { useRouter } from "next/navigation";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  // handle submit
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("handleSubmit FIRED!");
    const formData = new FormData(event.currentTarget);

    const response = await loginCompany(formData);

    console.log("RESPONSE ON PAGE: ", response);

    if (response?.login === "FAILED") {
      // login failed = show error message
      setErrorMsg("Wrong email or password");
    } else {
      // login successfull - clear error message
      setErrorMsg("");
      // set local storage variable for company id:
      const companyId = response?.companyId;

      localStorage.setItem("companyId", companyId);

      // redirect to Add New Game:
      router.replace("/game/add-new");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        //action={loginCompany}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-200 p-10 rounded-2xl w-1/2"
      >
        <h1 className="text-4xl text-black">Login</h1>
        <label>
          Email
          <input name="email" type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Password:
          <input name="password" type="password" id="myInput" />
        </label>
        <button className="bg-green-500 rounded-lg p-2">Submit</button>
        {errorMsg && <div className="bg-red-500 p-1">{errorMsg}</div>}
      </form>
    </div>
  );
}
