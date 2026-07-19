import { PageHero } from '../components/PageHero';
import { Seo } from '../components/Seo';
import { business } from '../data/site';

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Website and enquiry terms for Chawla Crane & Heavy Labour Contractor."
        path="/terms-and-conditions"
      />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Terms for using this website and submitting an enquiry. Last updated: 19 July 2026."
      />
      <article className="prose-copy mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <h2>1. Website purpose</h2>
        <p>
          This website provides general information about crane rental, lifting, industrial shifting and
          recovery services. Website content is not a binding quotation, reservation or guarantee of
          equipment availability.
        </p>

        <h2>2. Enquiries and bookings</h2>
        <p>
          A phone call, email, website form or WhatsApp message is an enquiry only. A booking exists only
          after the business confirms the equipment, work scope, location, date, price, payment terms and
          any other applicable conditions.
        </p>

        <h2>3. Customer information</h2>
        <p>
          The customer is responsible for providing accurate load, dimensions, lift height, radius, site
          access, ground conditions, timing and hazard information. Changes or missing information may
          affect equipment selection, price, timing or the ability to perform the work.
        </p>

        <h2>4. Site conditions and safety</h2>
        <p>
          Work remains subject to safe access, adequate ground support, required permits, exclusion zones,
          weather, utilities, traffic controls and compliance with site rules. Unsafe work may be delayed,
          changed or declined.
        </p>

        <h2>5. Pricing and payments</h2>
        <p>
          Pricing is provided separately and may include mobilisation, demobilisation, minimum hours,
          overtime, fuel, permits, labour, taxes and other agreed costs. This website does not accept online
          payments. Use only payment instructions confirmed directly through authorised business contacts.
        </p>

        <h2>6. Fleet information</h2>
        <p>
          Images and crane capacities shown are representative. A specific brand, model, configuration or
          machine is supplied only when expressly confirmed for the booking.
        </p>

        <h2>7. Third-party links</h2>
        <p>
          The website includes direct links to telephone, email and WhatsApp services. Those services are
          operated by third parties and are subject to their own terms and privacy practices.
        </p>

        <h2>8. Website availability</h2>
        <p>
          Reasonable efforts are made to keep the website accurate and available. The operator does not
          guarantee uninterrupted access and may update content, contact details or service information.
        </p>

        <h2>9. Governing law</h2>
        <p>
          These website terms are governed by the laws applicable in India. Any dispute relating solely to
          website use is subject to the competent courts in Gurugram, Haryana, unless a separate written
          service agreement states otherwise.
        </p>

        <h2>10. Contact</h2>
        <p>
          {business.legalName}, {business.address}. Email{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a>; phone{' '}
          <a href={business.phoneHref}>{business.phone}</a>.
        </p>
      </article>
    </>
  );
}
