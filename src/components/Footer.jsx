import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business, navigation } from '../data/site';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-amber-400 font-black text-slate-950">
              CC
            </span>
            <div>
              <p className="font-black text-white">{business.legalName}</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">Gurugram, Haryana</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Crane rental, heavy lifting, industrial shifting and recovery support. Equipment
            availability, pricing and mobilisation are confirmed for each enquiry.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-white">Pages</h2>
          <ul className="grid gap-2 text-sm">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link className="hover:text-amber-300" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-white">Contact</h2>
          <ul className="grid gap-3 text-sm">
            <li>
              <a className="flex gap-2 hover:text-amber-300" href={business.phoneHref}>
                <Phone className="mt-0.5 shrink-0" size={16} /> {business.phone}
              </a>
            </li>
            <li>
              <a className="flex gap-2 break-all hover:text-amber-300" href={`mailto:${business.email}`}>
                <Mail className="mt-0.5 shrink-0" size={16} /> {business.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 shrink-0" size={16} /> {business.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {business.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:text-white" to="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-white" to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
