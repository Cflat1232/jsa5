import Image from "next/image";
import Link from "next/link";

export default async function Characters() {
  const response = await fetch("https://rickandmortyapi.com/api/character", { cache: "no-store" });

  if (!response.ok) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 text-slate-900">
        <h2 className="text-3xl font-semibold">Characters</h2>
        <p className="mt-4 text-slate-600">Unable to load characters at this time.</p>
      </main>
    );
  }

  const data = await response.json();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-slate-900">
      <h2 className="text-4xl font-semibold">Characters</h2>
      <p className="mt-2 text-slate-600">Select a character to view their details.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.results.map((character) => (
          <Link
            key={character.id}
            href={`/characters/${character.id}`}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-slate-100">
              <Image src={character.image} alt={character.name} fill className="object-cover" sizes="100vw" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-slate-900">{character.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{character.species} · {character.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}