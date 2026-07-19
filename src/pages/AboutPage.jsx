import { createElement } from 'react';
import { Eye, ShieldCheck, Wrench } from 'lucide-react';
import { ContactCta } from '../components/ContactCta';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { business } from '../data/site';

const principles = [
  {
    icon: Eye,
    title: 'Clear information',
    description:
      'Service scope, contact details and booking conditions are presented openly before a customer commits.',
  },
  {
    icon: Wrench,
    title: 'Suitable equipment',
    description:
      'Crane selection is based on the project details supplied, not only the headline lifting capacity.',
  },
  {
    icon: ShieldCheck,
    title: 'Confirmation before dispatch',
    description:
      'Availability, price, mobilisation and responsibilities are confirmed directly for each job.',
  },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Chawla Cranes"
        description="Learn about Chawla Crane & Heavy Labour Contractor and its crane rental, industrial lifting and recovery services in Gurugram and Delhi NCR."
        path="/about"
      />
      <PageHero
        eyebrow="About us"
        title="Direct crane rental and lifting support from Gurugram"
        description={`${business.legalName} responds to construction, industrial lifting, equipment shifting and recovery enquiries across Gurugram and Delhi NCR.`}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="Project information comes before equipment confirmation"
              description="Every lifting requirement is different. Load weight, radius, height, access and ground conditions can change the crane needed for a job."
            />
            <p className="mt-6 leading-7 text-slate-600">
              Customers can contact the business by phone, WhatsApp or email. The team reviews the
              requirement and confirms suitable equipment, availability, mobilisation and pricing.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              This website is an information and enquiry destination. It does not accept online payments,
              guarantee equipment without confirmation or redirect visitors to an unrelated business.
            </p>
          </div>
          <img
            src="/images/cranes/60-ton-crawler-crane.webp"
            alt="Crawler crane used for planned lifting work"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Operating principles"
            title="A transparent path from enquiry to mobilisation"
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map(({ icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-7">
                {createElement(icon, { className: 'text-amber-700', size: 28 })}
                <h2 className="mt-5 text-xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
