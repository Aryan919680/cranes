import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { business, navigation } from '../data/site';

function navClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-semibold transition ${
    isActive
      ? 'bg-amber-400 text-slate-950'
      : 'text-slate-200 hover:bg-white/10 hover:text-white'
  }`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label="Chawla Cranes home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-400 text-lg font-black text-slate-950">
            CC
          </span>
          <span>
            <span className="block text-base font-black tracking-tight">Chawla Cranes</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Crane rental & lifting
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-amber-300"
          >
            <Phone size={17} aria-hidden="true" />
            {business.phone}
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <a
              href={business.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-3 font-black text-slate-950"
            >
              <Phone size={18} /> Call {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
