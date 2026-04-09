import { fetchNewsItem } from "@/lib/mongodb";




export default async function NewsItem() {
  const newsEntry = await fetchNewsItem();

  if (!newsEntry) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">Latest news is currently unavailable</h2>
          <p className="text-slate-700 leading-8">The news feed is temporarily unavailable. Please check back later.</p>
        </article>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-4xl font-semibold text-slate-900 mb-4">{newsEntry.title}</h2>
        <p className="text-slate-700 leading-8 mb-6">{newsEntry.body}</p>
        {newsEntry.image && (
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <img
              alt={newsEntry.title}
              src={newsEntry.image}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </article>
    </main>
  );
}