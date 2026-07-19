export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-amber-400">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}
