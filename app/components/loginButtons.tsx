"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function LoginButtons() {
  const router = useRouter();
  const [isLogedIn, setIsLogedIn] = useState<string | false>(false);

  useEffect(() => {
    const companyId =
      (window?.localStorage.getItem("companyId") as string) || "";
    setIsLogedIn(companyId || false);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("companyId");
    setIsLogedIn(false);
    router.push("/");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div>
      {isLogedIn ? (
        <button
          onClick={handleLogOut}
          className="bg-red-500 rounded-lg px-3 py-1"
        >
          Log out
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-green-500 rounded-lg px-3 py-1"
        >
          Log in
        </button>
      )}
    </div>
  );
}
