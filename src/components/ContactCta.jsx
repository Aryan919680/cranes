import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '../data/site';

export function ContactCta() {
  return (
    <section className="bg-amber-400 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-900">Discuss your lift</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Share the load, location and required date.
          </h2>
          <p className="mt-3 max-w-2xl text-slate-800">
            Availability and pricing are confirmed after reviewing the project information.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3.5 font-black text-white hover:bg-slate-800"
          >
            <Phone size={18} /> Call now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-950 px-5 py-3 font-black text-slate-950 hover:bg-white/40"
          >
            Send details <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
