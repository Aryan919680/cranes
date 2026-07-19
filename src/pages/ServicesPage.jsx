import { createElement } from 'react';
import { Check } from 'lucide-react';
import { ContactCta } from '../components/ContactCta';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { services } from '../data/site';

const considerations = [
  'Load weight, dimensions and centre of gravity',
  'Required working radius and lift height',
  'Ground conditions and available setup space',
  'Access restrictions and mobilisation route',
  'Permits, traffic controls or site-specific requirements',
  'Expected work duration and preferred operating date',
];

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Crane Rental & Heavy Lifting Services"
        description="Mobile crane rental, crawler crane support, hydra services, industrial shifting and heavy vehicle recovery in Gurugram and Delhi NCR."
        path="/services"
      />
      <PageHero
        eyebrow="Our services"
        title="Crane rental and lifting services planned around the job site"
        description="Service recommendations are based on the load, reach, access, ground conditions and project schedule provided by the customer."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="grid h-13 w-13 place-items-center rounded-xl bg-amber-100 text-amber-800">
                  {createElement(icon, { size: 26 })}
                </span>
                <h2 className="mt-5 text-2xl font-black">{title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{description}</p>
                <p className="mt-5 text-sm font-semibold text-slate-500">
                  Availability and scope are confirmed after reviewing project details.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Before we quote"
              title="Details that affect crane selection and pricing"
              description="Providing accurate information helps avoid unsuitable equipment, access delays and changes on the day of work."
            />
            <ul className="mt-8 grid gap-4">
              {considerations.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-400 text-slate-950">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/cranes/80-ton-mobile-crane.webp"
            alt="Mobile crane positioned at a work site"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
