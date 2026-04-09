import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-slate-900">
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h2 className="text-4xl font-semibold tracking-tight">Welcome to Rick & Morty Trivia</h2>
        <p className="mt-4 text-slate-700 leading-8">
          Explore the Rick and Morty character library, read the latest news, and discover detailed
          character profiles with live API data.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/characters"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Browse Characters
          </Link>
          <Link
            href="/news"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Read News
          </Link>
        </div>
      </section>
    </main>
  );
}
