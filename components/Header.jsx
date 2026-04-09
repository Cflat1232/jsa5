import Image from "next/image";
import Link from "next/link";
import { fetchGreeting } from "@/lib/mongodb";

export default async function Header() {
  const greeting = await fetchGreeting();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 max-w-6xl">
        <div className="flex items-center gap-4">
          <Image
            alt="Eric"
            src="/Eric.jpg"
            width={72}
            height={72}
            className="rounded-full"
          />
          <div>
            <p className="text-base font-semibold text-slate-900">Rick & Morty Trivia</p>
            <p className="text-sm text-slate-600">Browse characters, read news, and explore details.</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-700">
          <Link href="/" className="rounded-full px-3 py-2 hover:bg-slate-100">Home</Link>
          <Link href="/characters" className="rounded-full px-3 py-2 hover:bg-slate-100">Characters</Link>
          <Link href="/news" className="rounded-full px-3 py-2 hover:bg-slate-100">News</Link>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-6">
        {greeting.map((item, index) => (
          <div key={index} className="prose prose-slate max-w-none text-slate-800">
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </header>
  );
}