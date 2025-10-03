import Link from "next/link";

export default function About() {
  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p className="mt-2">Saya sedang berkuliah di politeknik negeri batam pada tahun 2025.</p>

      <Link
        href="/"
        className="text-blue-500 hover:underline"
      >
        Kembali ke Home
      </Link>
    </main>
  );
}
