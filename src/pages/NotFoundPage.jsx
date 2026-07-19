import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function NotFoundPage() {
  return (
    <section className="grid min-h-[65vh] place-items-center px-5 py-20 text-center">
      <Seo
        title="Page Not Found"
        description="The requested Chawla Cranes page could not be found."
        path="/404"
      />
      <div>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-700">404 error</p>
        <h1 className="mt-3 text-5xl font-black tracking-tight">Page not found</h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
          The address may be incorrect or the page may have moved. Use the main navigation or return home.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-black text-white hover:bg-slate-800"
        >
          <ArrowLeft size={18} /> Return home
        </Link>
      </div>
    </section>
  );
}
