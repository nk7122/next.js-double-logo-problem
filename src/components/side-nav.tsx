"use client";

import Logo from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidenav() {
  const dashboardMenu = [
    { name: "Home", href: "/dashboard" },
    { name: "Books Lists", href: "/dashboard/books-list" },
    { name: "Readers' Lists", href: "/dashboard/readers-list" },
  ];
  const pathName = usePathname();
  console.log(pathName);

  return (
    <aside className="bg-blue-950 p-5 flex flex-col rounded-lg w-48 items-center">
      <Logo className="max-w-16 mb-5" />

      <nav>
        <ul className="font-bold text-blue-950 grid gap-2 text-center">
          {dashboardMenu.map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.href}
                className={`p-2 rounded-lg block ${
                  pathName === menu.href ? "bg-orange-500" : "bg-slate-200"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
