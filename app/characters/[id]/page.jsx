import Character from "@/components/Character.jsx";
import { notFound } from "next/navigation";
export default async function CharacterDetail({ params }) {
  const { id } = params;

  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, { cache: "no-store" });

  if (!response.ok) {
    return notFound();
  }

  const data = await response.json();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-slate-900">
      <Character
        name={data.name}
        species={data.species}
        imageURL={data.image}
        status={data.status}
        gender={data.gender}
        origin={data.origin?.name}
        location={data.location?.name}
      />
    </main>
  );
}