import Image from "next/image";
import Link from "next/link";

export default function Character({ name, species, imageURL, status, gender, origin, location }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-100">
          <Image
            src={imageURL}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-semibold text-slate-900">{name}</h2>
            <p className="mt-2 text-slate-600">{species}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Status</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{status ?? "Unknown"}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Gender</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{gender ?? "Unknown"}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Origin</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{origin ?? "Unknown"}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{location ?? "Unknown"}</p>
            </div>
          </div>
          <Link
            href="/characters"
            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            ← Back to Characters
          </Link>
        </div>
      </div>
    </article>
  );
}
