import React from "react";
import Navbar from "./components/navbar";
import Games from "./components/games";

export default function Home() {
  return (
    <main className="flex min-h-screen ">
      <div className="">
        <Games />
      </div>
    </main>
  );
}
