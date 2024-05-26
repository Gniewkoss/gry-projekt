"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex flex-row bg-stone-700 w-screen p-8 justify-between">
      <button onClick={() => router.push("/")}>
        <h1 className="text-2xl">GamesApp</h1>
      </button>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/company/add-new")}
          className="bg-red-500 rounded-lg px-3 py-1"
        >
          Register your game
        </button>
        <button
          onClick={() => router.push("/addUser")}
          className="bg-green-500 rounded-lg px-3 py-1"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
