import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { Seo } from '../components/Seo';
import { business } from '../data/site';

const initialForm = {
  name: '',
  phone: '',
  location: '',
  service: 'Mobile crane rental',
  details: '',
};

export function ContactPage() {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submitToWhatsApp(event) {
    event.preventDefault();
    const text = [
      'Hello Chawla Cranes, I would like to request availability.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Project location: ${form.location}`,
      `Service: ${form.service}`,
      `Requirement: ${form.details}`,
    ].join('\n');

    window.location.assign(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`);
  }

  return (
    <>
      <Seo
        title="Contact & Request Availability"
        description="Contact Chawla Cranes by phone, WhatsApp or email and share your crane rental or lifting requirement in Gurugram and Delhi NCR."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Share your crane rental or lifting requirement"
        description="Provide the load, location, date and access details. The form below opens WhatsApp with your information; this website does not store the form submission."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-5">
            <a
              href={business.phoneHref}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-amber-400"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-800">
                <Phone size={22} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-500">Primary phone</span>
                <span className="mt-1 block text-lg font-black text-slate-950">{business.phone}</span>
              </span>
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-400"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                <MessageCircle size={22} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-500">WhatsApp</span>
                <span className="mt-1 block text-lg font-black text-slate-950">{business.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-amber-400"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-800">
                <Mail size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-500">Email</span>
                <span className="mt-1 block break-all text-base font-black text-slate-950">{business.email}</span>
              </span>
            </a>
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-800">
                <MapPin size={22} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-500">Contact address</span>
                <span className="mt-1 block font-black text-slate-950">{business.address}</span>
              </span>
            </div>
          </aside>

          <form onSubmit={submitToWhatsApp} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black">Request availability</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Required fields are used only to prepare the WhatsApp message opened on your device.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  autoComplete="name"
                  className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Phone
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+() -]{7,20}"
                  className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  placeholder="Contact number"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Project location
                <input
                  required
                  name="location"
                  value={form.location}
                  onChange={updateField}
                  autoComplete="address-level2"
                  className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  placeholder="City or site location"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Service
                <select
                  name="service"
                  value={form.service}
                  onChange={updateField}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                >
                  <option>Mobile crane rental</option>
                  <option>Hydra or pick-and-carry</option>
                  <option>Crawler crane support</option>
                  <option>Industrial shifting</option>
                  <option>Heavy vehicle recovery</option>
                  <option>Other lifting requirement</option>
                </select>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-slate-800">
              Requirement details
              <textarea
                required
                name="details"
                value={form.details}
                onChange={updateField}
                rows="6"
                className="resize-y rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                placeholder="Include load weight, lift height, required date, duration and access details."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-4 font-black text-white hover:bg-emerald-500"
            >
              <MessageCircle size={19} /> Open WhatsApp with enquiry
            </button>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Sending the message does not reserve equipment. The business must confirm availability and terms.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
