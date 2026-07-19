export function SectionHeading({ eyebrow, title, description, center = false, inverse = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`mb-3 text-xs font-black uppercase tracking-[0.22em] ${inverse ? 'text-amber-400' : 'text-amber-700'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-5xl ${inverse ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 leading-7 ${inverse ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
