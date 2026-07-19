import { Check, MessageCircle } from 'lucide-react';
import { ContactCta } from '../components/ContactCta';
import { PageHero } from '../components/PageHero';
import { Seo } from '../components/Seo';
import { business, cranes } from '../data/site';

export function FleetPage() {
  return (
    <>
      <Seo
        title="Crane Fleet"
        description="View representative mobile and crawler crane capacities available for project enquiries across Gurugram, Manesar, Noida and Delhi NCR."
        path="/fleet"
      />
      <PageHero
        eyebrow="Fleet"
        title="Representative crane capacities for project enquiries"
        description="Images and categories help you discuss the requirement. The specific machine, configuration and availability are confirmed before booking."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {cranes.map((crane) => {
            const message = encodeURIComponent(
              `Hello Chawla Cranes, I need availability and pricing for a ${crane.name}.`,
            );
            return (
              <article key={crane.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={crane.image}
                  alt={crane.name}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-black">{crane.name}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{crane.summary}</p>
                  <ul className="mt-5 grid gap-2">
                    {crane.uses.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-amber-700" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${business.whatsapp}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 font-black text-white hover:bg-slate-800"
                  >
                    <MessageCircle size={18} /> Ask about this crane
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-black">Fleet information notice</h2>
          <p className="mt-4 leading-7 text-slate-600">
            The fleet shown on this website is representative. Capacity alone does not determine suitability.
            Boom configuration, working radius, ground conditions, access and load details must also be reviewed.
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
