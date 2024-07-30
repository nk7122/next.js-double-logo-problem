import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-blue-950 rounded-xl pt-20">
      <a href="/dashboard">
        {" "}
        <Logo className="max-w-52 mb-2" />
      </a>
      <h1 className="font-bold text-white text-3xl pb-10 pt-5">
        To Infititty, And Beyond!
      </h1>
    </main>
  );
}

// throe new Error() digunakan untuk mengeluarkan error page ketika terjadi suatu kesalahan.
// contoh: ketika sedang loading data dan kep[otong di tengah akibat terputus dari internet.

// JANGAN LUPA DI RETURN WEEYYYY!!!!!!!!!

// untuk icons, jangan lupa untuk intall react-icons di terminal
// npm i react-icons
