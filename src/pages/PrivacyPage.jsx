import { PageHero } from '../components/PageHero';
import { Seo } from '../components/Seo';
import { business } from '../data/site';

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Privacy policy for the Chawla Cranes website and its phone, email and WhatsApp enquiry channels."
        path="/privacy-policy"
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How information is handled when you browse this website or contact the business. Last updated: 19 July 2026."
      />
      <article className="prose-copy mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <h2>1. Who operates this website</h2>
        <p>
          This website is operated for {business.legalName}, based in Gurugram, Haryana, India.
          Contact details are shown on the Contact page and at the end of this policy.
        </p>

        <h2>2. Information you choose to provide</h2>
        <p>
          You may provide your name, telephone number, email address, project location, lifting
          requirement, equipment details, dates, photographs or other information when contacting us.
        </p>

        <h2>3. Website enquiry form</h2>
        <p>
          The contact form on this website prepares a WhatsApp message on your device. The website does
          not save that form submission in its own database. WhatsApp processes information under its own
          terms and privacy policy when you choose to send the message.
        </p>

        <h2>4. How information may be used</h2>
        <ul>
          <li>To respond to enquiries and review service availability.</li>
          <li>To prepare estimates, quotations and mobilisation plans.</li>
          <li>To communicate about a requested or confirmed service.</li>
          <li>To maintain business, tax, safety and transaction records where required.</li>
          <li>To protect the website and business from fraud, abuse or security incidents.</li>
        </ul>

        <h2>5. Analytics and cookies</h2>
        <p>
          The supplied website has analytics disabled by default. If the operator later enables a valid
          Google Analytics measurement ID, the website may use Google Analytics to understand aggregate
          usage. Any required consent banner and regional settings should be configured before enabling it.
        </p>

        <h2>6. Sharing</h2>
        <p>
          Information may be shared only where reasonably needed with service crews, equipment providers,
          transport partners, professional advisers, hosting providers, communication providers, law
          enforcement or regulators. Personal information is not sold as a standalone product.
        </p>

        <h2>7. Retention and security</h2>
        <p>
          Information is retained only for as long as reasonably required for enquiries, contracts,
          accounts, legal obligations and dispute handling. Reasonable administrative and technical
          controls are used, but no internet or communication system can be guaranteed completely secure.
        </p>

        <h2>8. Your choices</h2>
        <p>
          You may ask about the personal information held in relation to your enquiry, request correction,
          or ask that information be deleted where no legal or contractual reason requires retention.
        </p>

        <h2>9. Contact</h2>
        <p>
          Email <a href={`mailto:${business.email}`}>{business.email}</a> or call{' '}
          <a href={business.phoneHref}>{business.phone}</a>. Contact address: {business.address}.
        </p>
      </article>
    </>
  );
}
