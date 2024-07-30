import Loading from "@/app/loading";
import BooksList from "@/components/books-list";
import { Suspense } from "react";

export default async function Page() {
  // throw new Error("Books' list error")
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-blue-950 text-2xl bg-orange-500 rounded-lg mb-12 py-10">
        Books' List
      </h1>
      <Suspense fallback={<Loading />}>
        <BooksList />
      </Suspense>
    </div>
  );
}

// gunakan <Suspense> untuk exclude the whole page ketika...
//...loading dan hanya bagian tertentu dari page saja yang loading.

// throe new Error() digunakan untuk mengeluarkan error page ketika terjadi suatu kesalahan.
// contoh: ketika sedang loading data dan kep[otong di tengah akibat terputus dari internet.

// JANGAN LUPA DI RETURN WEEYYYY!!!!!!!!!
