"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(5);

  useEffect(() => {
    setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        router.push("/");
      }
    }, 1000);
  }, [remainingTime, router]);

  return (
    <>
      <main className="flex flex-rows justify-center min-h-screen items-center">
        <h1 className="text-2xl font-bold">
          Oops.. You made a mistake, you silly goose! Going back in{" "}
          {remainingTime} months.
        </h1>
      </main>
    </>
  );
}

// set height and width di screen untuk bisa dipindah2kan.
// Di sini minimum height di set menjadi ukuran screen.

// Ukuran screen juga bisa di set untuk berubah-ubah...
// ...tergantung device yang digunakan.
