import { createElement } from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/ContactCta';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import {
  business,
  cranes,
  processSteps,
  services,
  trustPoints,
} from '../data/site';

export function HomePage() {
  return (
    <>
      <Seo
        title="Crane Rental in Gurugram & Delhi NCR"
        description="Crane rental, heavy lifting, industrial shifting and recovery support across Gurugram, Manesar, Noida and Delhi NCR."
        path="/"
      />

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <img
          src="/images/cranes/160-ton-mobile-crane.webp"
          alt="Large mobile crane available for industrial lifting work"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              Gurugram · Manesar · Noida · Delhi NCR
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.04] tracking-tight sm:text-7xl">
              Crane rental and heavy lifting support for real project needs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Mobile cranes, crawler cranes, industrial shifting and heavy recovery. Get a clear
              availability and pricing response after sharing your site and load details.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-300"
              >
                <Phone size={19} /> Call {business.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-4 font-black text-white transition hover:bg-white/10"
              >
                Request availability <ArrowRight size={19} />
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              No online payment is requested. Final equipment, pricing and mobilisation are confirmed directly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8">
            <h2 className="text-2xl font-black">Information needed for a quote</h2>
            <ul className="mt-6 grid gap-4">
              {[
                'Load weight and dimensions',
                'Required lift height or boom reach',
                'Project location and site access',
                'Preferred date and work duration',
                'Photos or drawings, when available',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-400 text-slate-950">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 font-black text-slate-950 hover:bg-slate-100"
            >
              Send project details <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Lifting support for construction and industrial work"
            description="The right equipment depends on load, reach, access and ground conditions. Each request is reviewed before availability is confirmed."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-amber-100 text-amber-800">
                  {createElement(icon, { size: 24 })}
                </span>
                <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 font-black text-amber-800 hover:text-amber-950"
          >
            View all service details <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Fleet overview"
            title="Crane capacities for different project conditions"
            description="The website shows representative equipment categories. Exact machine availability is confirmed for the requested date and location."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cranes.slice(0, 3).map((crane) => (
              <article key={crane.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <img
                  src={crane.image}
                  alt={crane.name}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-950">{crane.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{crane.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <Link
            to="/fleet"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-black text-white hover:bg-slate-800"
          >
            View full fleet <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How enquiries work"
            title="A clear process before mobilisation"
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 font-black text-amber-400">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Transparent destination"
            title="Useful information before you contact us"
            description="This website does not use hidden landing pages, automatic redirects or fake online confirmations. Service details and contact information are visible to every visitor."
            inverse
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {trustPoints.map(({ title, description, icon }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                {createElement(icon, { className: 'text-amber-400', size: 26 })}
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
