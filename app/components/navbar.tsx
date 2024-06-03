"use client";
import { useRouter } from "next/navigation";
import LoginButtons from "./loginButtons";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row items-center bg-stone-700 w-full p-8 justify-between">
      <button onClick={() => router.push("/")}>
        <h1 className="text-2xl sm:text-xl text-white mr-0 sm:mr-10">
          GamesApp
        </h1>
      </button>
      <div className="flex gap-4 flex-col sm:flex-row items-center mt-4 sm:mt-0">
        <button
          onClick={() => router.push("/company/add-new")}
          className="bg-red-500 text-white rounded-lg px-3 py-2 sm:px-4 sm:py-2 sm:h-10"
        >
          Register your company
        </button>
        <LoginButtons />
      </div>
    </div>
  );
}
