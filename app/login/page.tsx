"use client";

import { useState } from "react";
import { loginCompany } from "@/app/actions/login";

type LoginResponse = {
  login: string;
  companyId?: number;
};

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit FIRED!");
    const formData = new FormData(event.currentTarget);

    const response = (await loginCompany(formData)) as LoginResponse;

    console.log("RESPONSE ON PAGE: ", response);

    if (response?.login === "FAILED") {
      setErrorMsg("Wrong email or password");
    } else {
      setErrorMsg("");
      const companyId = response?.companyId;

      localStorage.setItem("companyId", companyId + "");

      window.location.href = "/game/add-new";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-200 p-6 sm:p-10 rounded-2xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl text-black">Login</h1>
        <label className="flex flex-col">
          Email
          <input name="email" type="text" className="rounded-lg p-2 mt-1" />
        </label>
        <label className="flex flex-col">
          Password
          <input
            name="password"
            type="password"
            id="myInput"
            className="rounded-lg p-2 mt-1"
          />
        </label>
        <button className="bg-green-500 text-white rounded-lg p-2 mt-4">
          Submit
        </button>
        {errorMsg && (
          <div className="bg-red-500 text-white p-2 rounded-lg">{errorMsg}</div>
        )}
      </form>
    </div>
  );
}
