import { CgDetailsMore } from "react-icons/cg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  subjects: string[];
}

export default async function BooksList() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch("https://gutendex.com/books/");
    const books = await response.json();

    return (
      <table className="text-sm w-full">
        <thead>
          <tr className="grid grid-cols-4 pb-5 text-blue-950 gap-5">
            <th className="text-start">Title</th>
            <th className="text-start">Authors</th>
            <th className="text-start">Subjects</th>
            <th className="text-start pl-32">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {books.results.map((item: Book) => (
            <tr key={item.id} className="grid grid-cols-4 py-2 gap-5">
              <td>{item.title}</td>
              <td>{item.authors[0].name}</td>
              <td>{item.subjects[0]}</td>
              <td className="pl-32 flex items-center">
                <Link
                  href={`/dashboard/books-list/${item.id}`}
                  className="bg-blue-950 py-2 px-4 mr-2 text-orange-500 font-bold"
                >
                  <CgDetailsMore />
                </Link>
                <button className="bg-blue-950 py-2 px-4 mr-2 text-orange-500 font-bold">
                  <RiDeleteBin5Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } catch (error) {
    console.error(error);
  }
}

// untuk urutan .id .title .author .subject, bisa di cek di gutendex.com
// (cari tau ini bisa diliat di mana lagi).
// tapi untuk real website, data di atas bisa di ambil dari database.

// untuk import, copy import link di website https://react-icons.github.io/react-icons/
// lalu ganti string di button menjadi link icon dari tempat yang sama.
