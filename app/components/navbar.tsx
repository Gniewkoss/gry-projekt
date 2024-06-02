"use client";
import { useRouter } from "next/navigation";
import LoginButtons from "./loginButtons";

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
          Register your company
        </button>
        <LoginButtons />
      </div>
    </div>
  );
}
