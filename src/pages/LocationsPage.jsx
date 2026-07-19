import { MapPin } from 'lucide-react';
import { ContactCta } from '../components/ContactCta';
import { PageHero } from '../components/PageHero';
import { Seo } from '../components/Seo';
import { business, serviceAreas } from '../data/site';

export function LocationsPage() {
  return (
    <>
      <Seo
        title="Service Areas"
        description="Crane rental and lifting support across Gurugram, IMT Manesar, Noida and Delhi NCR, subject to equipment and mobilisation availability."
        path="/locations"
      />
      <PageHero
        eyebrow="Service areas"
        title="Crane mobilisation across Gurugram and Delhi NCR"
        description="Coverage is confirmed for every enquiry based on the equipment required, project date, route and site access."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          {serviceAreas.map((area) => (
            <article key={area.name} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <MapPin className="text-amber-700" size={28} />
              <h2 className="mt-5 text-2xl font-black">{area.name}</h2>
              <p className="mt-3 leading-7 text-slate-600">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-2xl bg-slate-950 p-8 text-white">
            <MapPin className="text-amber-400" size={32} />
            <h2 className="mt-5 text-3xl font-black">Contact address</h2>
            <p className="mt-4 text-lg text-slate-300">{business.address}</p>
            <p className="mt-6 text-sm leading-6 text-slate-400">
              Equipment yards and work locations may differ from the contact address. Confirm collection,
              inspection or meeting arrangements before travelling.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Outside the listed areas?</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Wider deployment may be possible depending on crane capacity, transport route, project duration and
              mobilisation costs. Share the complete location and schedule for a direct availability check.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
