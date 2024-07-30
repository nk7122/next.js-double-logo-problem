import Sidenav from "@/components/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex gap-8">
      <Sidenav />
      {children}
    </main>
  );
}

// ReactNode: In React, ReactNode is a type that represents any renderable content.
// It is a union type that can represent a wide variety of types that React can...
// ...render, including elements, strings, numbers, and fragments, among others.
