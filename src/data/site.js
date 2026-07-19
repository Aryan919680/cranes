import {
  Building2,
  Construction,
  Factory,
  HardHat,
  Route,
  Truck,
  Wrench,
} from 'lucide-react';

export const business = {
  legalName: 'Chawla Crane & Heavy Labour Contractor',
  displayName: 'Chawla Cranes',
  phone: '+91 97174 59360',
  phoneHref: 'tel:+919717459360',
  alternatePhone: '+91 97101 11130',
  alternatePhoneHref: 'tel:+919710111130',
  whatsapp: '919717459360',
  email: 'manesar@chawlacranes.com',
  address: 'Sector 56, Gurugram, Haryana 122051',
  domain: 'https://www.craneservicesgurugram.com',
};

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Locations', to: '/locations' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const services = [
  {
    title: 'Mobile Crane Rental',
    description:
      'Mobile cranes for construction, plant maintenance, equipment placement and structural work.',
    icon: Construction,
  },
  {
    title: 'Hydra & Pick-and-Carry',
    description:
      'Compact lifting support for factories, warehouses, loading yards and short-distance material movement.',
    icon: Factory,
  },
  {
    title: 'Crawler Crane Support',
    description:
      'Stable tracked crane options for longer projects, infrastructure work and uneven job sites.',
    icon: HardHat,
  },
  {
    title: 'Heavy Vehicle Recovery',
    description:
      'Assistance for immobilised commercial vehicles, machinery and heavy equipment, subject to site assessment.',
    icon: Truck,
  },
  {
    title: 'Industrial Shifting',
    description:
      'Planned lifting and positioning support for machinery relocation and industrial installation work.',
    icon: Wrench,
  },
  {
    title: 'Project Lift Planning',
    description:
      'Equipment selection and mobilisation planning based on load details, access and project conditions.',
    icon: Building2,
  },
];

export const cranes = [
  {
    name: '160 Ton Mobile Crane',
    image: '/images/cranes/160-ton-mobile-crane.webp',
    summary:
      'High-capacity telescopic mobile crane for major industrial, infrastructure and structural lifting work.',
    uses: ['Heavy structural lifts', 'Industrial projects', 'Long-reach work'],
  },
  {
    name: '80 Ton Mobile Crane',
    image: '/images/cranes/80-ton-mobile-crane.webp',
    summary:
      'Versatile mobile crane for plant installation, construction and medium-to-heavy project lifts.',
    uses: ['Plant installation', 'Steel erection', 'Project lifting'],
  },
  {
    name: '60 Ton Mobile Crane',
    image: '/images/cranes/60-ton-mobile-crane.webp',
    summary:
      'Mobile lifting option for construction sites, machinery handling and scheduled maintenance work.',
    uses: ['Construction', 'Maintenance', 'Equipment placement'],
  },
  {
    name: '60 Ton Crawler Crane',
    image: '/images/cranes/60-ton-crawler-crane.webp',
    summary:
      'Tracked crane suited to longer-duration projects where ground conditions and stability are important.',
    uses: ['Infrastructure', 'Uneven sites', 'Long projects'],
  },
  {
    name: '50 Ton Mobile Crane',
    image: '/images/cranes/50-ton-mobile-crane.webp',
    summary:
      'Practical crane for factory jobs, shed erection, material handling and general project work.',
    uses: ['Factory work', 'Shed erection', 'Material handling'],
  },
  {
    name: '25 Ton Mobile Crane',
    image: '/images/cranes/25-ton-mobile-crane.webp',
    summary:
      'Compact mobile crane for routine lifting, loading, unloading and smaller construction projects.',
    uses: ['Loading and unloading', 'Factory shifting', 'Compact sites'],
  },
];

export const serviceAreas = [
  {
    name: 'Gurugram',
    description:
      'Crane rental and lifting support for commercial, residential and industrial project locations across Gurugram.',
  },
  {
    name: 'IMT Manesar',
    description:
      'Industrial lifting, machinery handling and project crane support for factories and warehouses in Manesar.',
  },
  {
    name: 'Noida',
    description:
      'Planned crane mobilisation for construction, industrial and infrastructure requirements in Noida.',
  },
  {
    name: 'Delhi NCR',
    description:
      'Service coverage across Delhi NCR is confirmed after reviewing equipment, access and mobilisation details.',
  },
];

export const processSteps = [
  {
    title: 'Share the requirement',
    description: 'Send the load, lift height, site location, date and access details.',
  },
  {
    title: 'Equipment review',
    description: 'The team reviews crane capacity, mobilisation and site constraints.',
  },
  {
    title: 'Quote and confirmation',
    description: 'Pricing and availability are confirmed before dispatch or reservation.',
  },
  {
    title: 'Site mobilisation',
    description: 'The agreed equipment and crew are mobilised for the confirmed work.',
  },
];

export const trustPoints = [
  {
    icon: Route,
    title: 'Clear service area',
    description: 'Gurugram, Manesar, Noida and Delhi NCR, with wider deployment by confirmation.',
  },
  {
    icon: HardHat,
    title: 'Project-specific planning',
    description: 'Equipment is proposed after reviewing load and site information.',
  },
  {
    icon: Truck,
    title: 'Direct contact',
    description: 'Speak to the business by phone, WhatsApp or email before booking.',
  },
];
