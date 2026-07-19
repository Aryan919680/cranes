import { MessageCircle } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { business } from '../data/site';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  const message = encodeURIComponent(
    'Hello Chawla Cranes, I would like to discuss a crane rental requirement.',
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        href={`https://wa.me/${business.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-black text-white shadow-xl transition hover:bg-emerald-500"
        aria-label="Contact Chawla Cranes on WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
