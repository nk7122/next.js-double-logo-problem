interface Person {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function ReadersList() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const readers = await response.json();

    return (
      <table className="text-sm w-full">
        <thead>
          <tr className="grid grid-cols-3 pb-5 text-blue-950">
            <th className="text-start">Name</th>
            <th className="text-start">Username</th>
            <th className="text-start">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {readers.map((person: Person) => (
            <tr key={person.id} className="grid grid-cols-3 py-2">
              <td>{person.name}</td>
              <td>@{person.username}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } catch (error) {
    console.error(error);
  }
}

// untuk urutan .id .title .author .subject, bisa di cek di (http://jsonplaceholder.typicode.com/users).
// tapi untuk real website, data di atas bisa di ambil dari database.
