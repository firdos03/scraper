'use client'

import { useState } from 'react'

const PHONE = '919876543210'
const PHONE_DISPLAY = '+91 98765 43210'
const WA_LINK = (text: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`
const LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCp53XPGayNfp_VxII2sOKE9vgP7UCOsuhtrI9DOqEd4jR1l6OtechlBYqMeUAR1emEYxxMoa5oCevdYz3H9kYlKwblR6jDqvqgomHRUJfKZMvqRVE6qzOt_027-Usk9VLmPQPphFMER9iemnNXhrVOTNYFQDacbao16yclltTFB9KU8VNmGzHtgrTotbuSJo3eTPKlC-rUdm0gpcEUC3BDcBDG_wIzHRyDmdibfWLc80yZFGTHIvK5Cw'

const NAV = [
  { label: 'Home', path: 'home' },
  { label: 'About', path: 'about' },
  { label: 'Scrap Materials', path: 'scrap-materials' },
  { label: 'How It Works', path: 'how-it-works' },
  { label: 'Why Us', path: 'why-us' },
  { label: 'FAQs', path: 'faqs' },
  { label: 'Contact', path: 'contact' },
]

const MATERIALS = [
  { title: 'Iron Scrap', desc: 'Sell old iron, steel items and other ferrous metal scrap through convenient collection.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZGDiam3dkdGiYRAE4yIMDD54WWs3f2nVYQZBS1x6ID_QJR9AHkFlZc3i1ugvvQ_Vzus9zIBlYhE7PZMNFze7LqB3JZnwOURkQcLhViwBR69mxeluxTWf_b3cBTSOVbwv4mB6iISIgd7zRYZjEXPdSqEo_RaeXrvCHEM-lmyWWXCrrEKhb1guZjBz7WTJuZnS1gyslan2X875yR9K4ojXKjuu9Dt1zPn9dXvDrTYjOPntt_xGC7bumBw' },
  { title: 'Aluminium Scrap', desc: 'Recycle aluminium frames, utensils, sheets and other aluminium materials.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdiKJaUHP_Q2gPerS7P3wcLx2KszD5LYZK8TVfno1shvG0tlinOVQJEfT0tsmIdAERzxwbNwWHHhjpX4ezSxjYI4Z8z97Xsc8H7rNfLR3cna8jkGCDU8nYsfpqFct89-kFrnyMg8x34L10llujHw45ZbqNPAxcB4qk7PzFxc629PY7rRzRVlNOKgJkWvYNyjdhi2uf-iLI8v2LXS_r5O0LHMywXB8sgZkkKL1YAADG8ZXQ95pu9-Nt2A' },
  { title: 'Copper Scrap', desc: 'Turn unused copper components, wires and metal pieces into value.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBza8IYXLuTEe4_-rWuwxCirxzkHlHp74Uph1gaRYhID2l6UNGjHbrRCjkxZEW1tbsdGWC2kbUpinCQinm9fRGF5l8LG1p-8ile9J1078aO3P8CWwsWs4D1HuKhc1x6M0ZTfo3toIjA6j01bLw9vpDdP0eh6ICbgdxbBvUs70Yawe_sbfiB7_z3E-Dw5R_dxBXClqI9-SvKhMBJSCXuQQvFl0rmurYTTKlBf0r6v7axBAjGqLm5tkYw9A' },
  { title: 'Brass Scrap', desc: 'Sell brass fittings, components and other recyclable brass materials.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaFXJ1hK6CFTCNVp11Klx5nIdXl7YBLz3zK6PzRwLbl2ukad4usv_KN5dp9DSYc_8zRNwOc-qWaDRkwarp-lPqFsvYJHabyk0fASDE1C7Az-ywNqFD4F8RvIRTnSz9CdtNeuTB99Rr7gN-TF6GtusGRe1PKv_XjLwBWfdsQggLXIfDzJa4hmHDENtbDVZhMSVxYY31w7WGSe8MahRRQX283tLS0oeAHSRP8Pdgj-57ai7rXzh2Mc_ncg' },
  { title: 'Electrical Scrap', desc: 'Clear out unwanted electrical equipment, cables, components and related scrap.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6MMxDTxZifdUXZEFJbQxiLXQD_ZFJqOSnKbFZnIaazdNwfGVktsCd5ETwbinpKjCNs3h3_fIBoC6EfxZetqTnsx7FAD1DUJ7JbHtZBvQs8eL_jcBV25HXTVezQ7L5yf47sjjoInFP3SyaypYrhR8ehCSGr8OTI5Fyx5pSAEjSE-0XGL3fa4G9tzRrvld5-RooZeWww9XMUAReDPXfrbwrt93F3kQU3w2RxF5v5yHWG1ZVSXQ7l8YZWQ' },
  { title: 'E-Waste', desc: 'Recycle old computers, printers, electronic components and other eligible electronic scrap.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_bD22OSEQB9ucEnOds3mwccQUWINuvC6I7Uqnv2NbDOuYRVX8bBd86n1NYY1b9zkJdvDVYEQzhgijozo0kd614y7aP_CWkUHPlCOr-3A6rPJojLDqAKTauinR2TloyqIStrGOH9hlI97tLKDKsALJYKEpEHE_Yz0qyWwBcfXT3p8jA_xdbZtSOvW198D9pN5mSnnPFCoh24oTDVx9yDxlkaT5wFk6iZkbv5c0gPGLkmbvhlp0SpqKZg' },
  { title: 'Car Scrap', desc: 'Get convenient assistance for disposing of old and unwanted vehicles and vehicle scrap.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGMzFZlTFD9gwJJtPH7AEcUVcIqpEq9Ttf2ztgzxQwQ5zP0wir0bNPK2Lp-eGte6WYAsBaCsaeJ0icfwiIaFphZvxbiSY8hVL-Vo-0QUidE7DN8S-Zmg9PBeuPYmuXgDqd76h88DtsK5eCpBCtY4wOoYSNkfXrWQdS6xR-6UBRuzLNOrSZJ4WbiKRL-mPguwAgGaNW3ZIAItSb7_oapd_FwLUZE-JnxdGJsSdZAw68O3pRKemVm_osuQ' },
  { title: 'Bike Scrap', desc: 'Sell unwanted two-wheeler scrap through a simple pickup process.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkKTusYsnYt9cmwX6rXxflct8NST0mk2MHcIrpgS5F481t_dZfmJOE-cdN8LkacdYX6DOUDQGEIrG4UnMsbYv5iALZTG2hnzYC4_Zd2CmnyVWNawYk_WJPoLAwAMQoSl_OUs2uIPrtxYSPyM0VFesuzOt7MRdwSbZ-HYuoCAPYzZZnwqyG1mFK0FI8OlO8gZQZ34tLzlYQAkmvydknwbm6yZrnVNx0pGVKPu90qvc8JpN5QhutP7GqDA' },
  { title: 'Battery Scrap', desc: 'Contact us for collection of eligible used batteries and battery-related scrap.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhG5ipfXkvaA33r6_0i5tpUwuBLYWB3mxPBKIDyIWMwictmwK1En0sfxWu90jI0IAH23y_OlBjTkKce1o6chgp0DC_fhJQHl9w5FFdumAqCuOvKduKhIXImxqSSgkHpEixEQsd1YJPfCWFXdaj2VZhTNgCPo4u4RdA_-bqMHXKMzjH4tg-BsiMuGlWFxZtc_HCgAfRuOZHuSnvrU4u0EjIXvBtMVvGNdQxq9NujS3cfMgxW2RcRXZ6oQ' },
  { title: 'Electric Wire Scrap', desc: 'Recycle unused electrical wires and cable scrap from homes and businesses.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBomYSXed0sBVl92uQZktXpSsD7LDddejRox2j8_44G8wMTpYKU_df2j7V9lG1sUAZMR_P1pdKsyh-i8IZOWfvHasDDXvfw7zoTUCuUl_6nynGrioI0219SbPm6enMpFFI8JvsXjL1EDGexER5Ty9arkWXNU3yCzP8mA7SdmC9mhSKxI5D48WUAE-T9qXSZdenqXfN7rETuhJY9kLTc54x7n5m9rZzTPvUySXP5wM8MLfoF90XFNDpRA' },
  { title: 'AC Scrap', desc: 'Dispose of old air-conditioning units and eligible AC-related scrap.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6kzjc597V9BlaVlzP9R7EaPL1_t4-6gRt73RteGSEq-2NUdMeRN-BOE1kZrgT_CiVAdhIzCUOOKxBkXXhlgce4Ojr3Rrl-B8a-lCBclfduMUn7ufPVjQ0AtifIGTKGbeC4yY7MKDjTNwyE4KrbsUq53pcqNc3EBa26iMJNVIhd84l25JfO3FJ2NoKxfCwWaBspVLV-40iqk8eujxfiDhA00wiThGgvgrUjix1WnY04_1T095FACH7QA' },
  { title: 'Bulk Industrial Scrap', desc: 'Collection solutions for factories, warehouses, offices and businesses with larger quantities.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiqNtMiZbbHdOFjnHcw37aLChiFSR2nnrLVxDDn5UHSxe9TvSFPC1tb6jxi0FWcUcNDl-sKjdXR3G70_CY8ciiFRYWstItKO5Flku_iCYJItDI5nnnmqaYdS56PmFs0P4DpVcehMhaBqcWZ1XISd8OUF8s4Q5D-J0Pl3-nWocBP44j-kyouYeiEa_BN_tk3ExTxCiEfPC7fwetYsJIY_Tpj7M6jzHOs1oQYScLXgeA6tL0lCcwe3zUjg' },
]

const STEPS = [
  { n: '01', title: 'Tell Us What You Have', desc: 'Call or WhatsApp us with details about your scrap.' },
  { n: '02', title: 'Schedule Pickup', desc: 'Choose a convenient date and pickup time.' },
  { n: '03', title: 'We Inspect & Weigh', desc: 'Our team checks the material and completes the weighing process.' },
  { n: '04', title: 'Complete the Sale', desc: 'Finalize the price and payment for your scrap.' },
]

const WHY = [
  { icon: 'local_shipping', title: 'Doorstep Convenience', desc: 'We come directly to your location at your preferred time slot.' },
  { icon: 'balance', title: 'Transparent Process', desc: 'Digital verified weighing with clear and open pricing policies.' },
  { icon: 'category', title: 'Multiple Scrap Categories', desc: 'Single point collection for metal, e-waste, electrical, and vehicles.' },
  { icon: 'apartment', title: 'Residential & Commercial', desc: 'Tailored pickup services for both households and large enterprises.' },
  { icon: 'support_agent', title: 'Professional Service', desc: 'Trained, courteous and verified collection executives.' },
  { icon: 'eco', title: 'Responsible Recycling', desc: 'Ensuring all collected scrap enters certified green recycling channels.' },
]

const VALUE_STEPS = [
  { n: '01', title: 'Convenient Pickup', desc: 'Arrange collection from your home, office or business.' },
  { n: '02', title: 'Clear Weighing', desc: 'Your materials are assessed and weighed before pricing.' },
  { n: '03', title: 'Fair Evaluation', desc: 'Pricing is based on material type, quantity, quality and applicable market conditions.' },
  { n: '04', title: 'Simple Payment', desc: 'Complete the transaction through an agreed payment method.' },
]

const AREAS = ['Madhapur', 'Gachibowli', 'Kondapur', 'HITEC City', 'Kukatpally', 'Banjara Hills', 'Jubilee Hills', 'Begumpet', 'Ameerpet', 'Secunderabad']

const TESTIMONIALS = [
  { text: 'Extremely professional service in Gachibowli. They arrived on time for our home cleanup, weighed everything transparently on a digital scale, and paid instantly via UPI.', name: 'Rajesh Kumar', role: 'Homeowner, Gachibowli' },
  { text: 'We regularly clear out office e-waste and old furniture scrap through AB Traders. Their bulk pickup process is extremely reliable and hassle-free.', name: 'Srinivas Rao', role: 'IT Manager, HITEC City' },
  { text: 'Super easy scheduling via WhatsApp. The team arrived right at the scheduled slot in Banjara Hills and handled all heavy lifting of old iron scrap seamlessly.', name: 'Priya Reddy', role: 'Resident, Banjara Hills' },
]

const FAQS = [
  { q: 'What types of scrap do you buy?', a: 'We buy iron, aluminium, copper, brass, electrical scrap, e-waste, car and bike scrap, used batteries, electric wires, AC units, and bulk industrial scrap.' },
  { q: 'Do you provide doorstep pickup?', a: 'Yes! We provide free doorstep pickup across all major areas in Hyderabad directly from your home, office, or business site.' },
  { q: 'How is the scrap pricing determined?', a: 'Pricing is based on current daily market rates, material type, quality, and quantity. We weigh materials transparently before finalizing the value.' },
  { q: 'Do you handle business and commercial scrap?', a: 'Yes, we specialize in corporate office cleanouts, warehouse scrap clearance, and factory bulk scrap collection with appropriate documentation.' },
  { q: 'Can I sell old car and bike scrap?', a: 'Yes, we provide convenient assistance and pickup services for disposing of old two-wheelers and four-wheeler vehicle scrap.' },
  { q: 'How do I schedule a pickup?', a: 'You can easily schedule a pickup by filling out our online booking form, calling us directly, or sending us a message on WhatsApp.' },
  { q: 'Is there a minimum quantity required for pickup?', a: 'We accommodate both small residential quantities and large bulk collections. Contact us to check availability for smaller batches in your locality.' },
  { q: 'Which areas in Hyderabad do you cover?', a: 'We cover Madhapur, Gachibowli, Kondapur, HITEC City, Kukatpally, Banjara Hills, Jubilee Hills, Begumpet, Ameerpet, Secunderabad, and surrounding areas.' },
  { q: 'Are there any unaccepted materials?', a: 'We do not accept hazardous waste, medical waste, radioactive materials, or flammable chemicals due to safety and environmental regulations.' },
]

const SCRAP_TYPES = [
  'Iron & Steel Scrap',
  'Copper & Brass',
  'Aluminium Scrap',
  'E-Waste / Electronics',
  'Car / Bike Scrap',
  'Bulk Industrial Scrap',
  'Other Household Scrap',
]

const Icon = ({ name, className = '', style }: { name: string; className?: string; style?: React.CSSProperties }) => (
  <span className={`material-symbols-outlined ${className}`} style={style}>{name}</span>
)

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  const emptyForm = { name: '', phone: '', scrapType: SCRAP_TYPES[0], quantity: '', area: '', pickupDate: '', message: '' }
  const [form, setForm] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitPickup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.phone) {
      setError('Please enter your name and phone number.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/pickup-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
      setForm(emptyForm)
    } catch (err) {
      setError('Something went wrong. Please try again or reach us on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubscribed(true)
      setEmail('')
    } catch {
      /* ignore for MVP */
    }
  }

  return (
    <div className="bg-surface font-body text-on-surface">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-space-md">
            <img alt="AB Traders Logo" className="h-8 w-auto object-contain rounded-md" src={LOGO} />
            <span className="text-lg font-headline font-bold tracking-tight text-primary">AB Traders</span>
          </button>
          <nav className="hidden lg:flex items-center gap-space-md">
            {NAV.map((n, i) => (
              <button
                key={n.path}
                onClick={() => scrollTo(n.path)}
                className={
                  i === 0
                    ? 'transition-colors px-3 py-2 bg-primary-container text-on-primary-container font-bold rounded-lg text-sm'
                    : 'text-sm text-on-surface-variant hover:text-on-surface transition-colors px-3 py-2'
                }
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-space-sm">
            <a className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald text-on-primary text-sm font-label-md hover:bg-emerald/90 transition-colors" href={WA_LINK('Hi AB Traders, I would like to sell my scrap.')} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" className="text-[18px]" />WhatsApp
            </a>
            <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-label-md hover:bg-primary/90 transition-colors">
              Sell Your Scrap
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Icon name="person" className="text-on-primary text-[18px]" />
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* 1. HERO */}
          <section id="home" className="relative min-h-[820px] flex items-center bg-surface overflow-hidden pt-12 pb-24">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 via-transparent to-primary-container/5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-gutter w-full grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/10 text-primary mb-space-md">
                  <Icon name="verified" className="text-[16px]" />
                  <span className="text-label-sm font-label-sm tracking-wider uppercase">TRUSTED SCRAP BUYING SERVICE IN HYDERABAD</span>
                </div>
                <h1 className="text-headline-lg-mobile lg:text-headline-lg font-headline font-bold text-on-surface mb-space-md tracking-tight">
                  Turn Your <span className="text-primary">Scrap Into Value.</span>
                </h1>
                <p className="text-body-lg text-on-surface-variant mb-space-xl max-w-2xl">
                  Sell your recyclable scrap with a simple, transparent pickup process. We collect metal, electrical, vehicle, electronic and other scrap from homes, offices and businesses across Hyderabad.
                </p>
                <div className="flex flex-wrap items-center gap-space-md mb-space-xl w-full sm:w-auto">
                  <button onClick={() => scrollTo('contact')} className="px-6 py-3.5 rounded-lg bg-primary text-on-primary text-label-lg font-label-lg hover:bg-primary/90 transition-all shadow-md text-center flex-1 sm:flex-none">Schedule a Scrap Pickup</button>
                  <a href={WA_LINK('Hi AB Traders, I would like to sell my scrap.')} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-lg border-2 border-primary text-primary text-label-lg font-label-lg hover:bg-primary/5 transition-all text-center flex-1 sm:flex-none flex items-center justify-center gap-2">
                    <Icon name="chat" className="text-emerald text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }} />WhatsApp Us
                  </a>
                </div>
                <div className="flex flex-col gap-space-sm pt-space-lg border-t border-outline-variant/30 w-full">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-on-surface font-medium">
                    <span className="flex items-center gap-1.5 text-emerald"><Icon name="check" className="text-[18px]" />Doorstep Pickup</span>
                    <span className="flex items-center gap-1.5 text-emerald"><Icon name="check" className="text-[18px]" />Transparent Weighing</span>
                    <span className="flex items-center gap-1.5 text-emerald"><Icon name="check" className="text-[18px]" />Quick Payment</span>
                  </div>
                  <p className="text-sm text-on-surface-variant font-medium">Residential • Commercial • Bulk Scrap</p>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
                  <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUYeZjVJbiq0orYFGkOTDsvK1xKdrVP-HSpB5FaA1oa8WR_OppF-FE_R4T8IdXijlEsxYB53jPsshQqaj6UvDvgnv0aAetK9dt-KcRrX9Y1vSbxVp2DlYJWt9gy0Ak97ZBbtSpyDvXHO9x65RA5i111rMPNXVDVHdpoHW0FKxtQj-H016Q0nXR9wNaGoL_F-1HRftwys7NIRBJy9u4r2vqctR-HKTGalXUOmeUbhPxaijvzqZYupgkdg')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface/90 backdrop-blur-md flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald/20 flex items-center justify-center text-emerald"><Icon name="local_shipping" /></div>
                      <div>
                        <p className="text-sm font-headline font-bold text-on-surface">Active Today in Hyderabad</p>
                        <p className="text-xs text-on-surface-variant">Over 45+ pickups completed</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald text-on-primary text-xs font-bold">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. TRUST BAR */}
          <section className="bg-surface-container-low py-space-xl border-y border-outline-variant/10">
            <div className="max-w-7xl mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-space-lg">
              {[
                { icon: 'home', title: 'Doorstep Pickup', desc: 'Direct from your location' },
                { icon: 'balance', title: 'Transparent Process', desc: 'Digital verified scales' },
                { icon: 'bolt', title: 'Fast Service', desc: 'Same-day scheduling' },
                { icon: 'domain', title: 'Residential & Business', desc: 'Scalable collection' },
              ].map((t) => (
                <div key={t.title} className="flex items-center gap-space-md p-4 rounded-xl bg-surface shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center shrink-0"><Icon name={t.icon} className="text-[24px]" /></div>
                  <div>
                    <h3 className="text-sm font-headline font-bold text-on-surface">{t.title}</h3>
                    <p className="text-xs text-on-surface-variant">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. SCRAP MATERIALS */}
          <section id="scrap-materials" className="py-space-2xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <span className="text-label-sm font-label-sm text-primary tracking-wider uppercase bg-primary-container/10 px-3 py-1 rounded-full">WHAT WE BUY</span>
                <h2 className="text-headline-md lg:text-headline-lg font-headline font-bold text-on-surface mt-space-sm mb-space-sm">Sell Your Scrap. We Handle the Rest.</h2>
                <p className="text-body-lg text-on-surface-variant">From everyday household scrap to large commercial quantities, we offer competitive rates and seamless pickups.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {MATERIALS.map((m) => (
                  <div key={m.title} className="group bg-surface-container-low rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border hover:border-emerald flex flex-col justify-between">
                    <div>
                      <div className="h-40 rounded-lg overflow-hidden mb-space-md relative">
                        <div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${m.img}')` }} />
                      </div>
                      <h3 className="text-headline-sm text-on-surface mb-space-xs font-headline font-semibold">{m.title}</h3>
                      <p className="text-body-sm text-on-surface-variant mb-space-md">{m.desc}</p>
                    </div>
                    <button onClick={() => scrollTo('contact')} className="inline-flex items-center justify-between w-full pt-space-sm border-t border-outline-variant/20 text-primary font-label-md hover:text-emerald transition-colors">
                      <span>Sell This Scrap</span>
                      <Icon name="arrow_forward" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. FEATURED VALUE */}
          <section id="about" className="py-space-2xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative">
                  <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjFUfDodt8tmkgx-UDVL5FA_1L0fjU-Ydrb-GlxoJg19-b5hXKWc61JDaLVxLrWmGmvKvS3X6hV-F_aU6VYftzYtR54TMKCOZosQqTScf6gUy9o75gOD5xbqAjtVqw84kmbuKKnQn9Ny9Jk65aIzB1LQgdWNqybpcnmF_1lpAbOsVN8I5-TZ0F8nllnmOlIAMeoU8lNv1DgfDSOwqRQkho5tckZAJteyqXzz3jSElk7mMSd7tiVhJB0w')" }} />
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-label-sm font-label-sm text-primary tracking-wider uppercase bg-primary-container/10 px-3 py-1 rounded-full mb-space-sm">WHY SELL YOUR SCRAP WITH US?</span>
                <h2 className="text-headline-md lg:text-headline-lg font-headline font-bold text-on-surface mb-space-md">A Simple Way to Clear Space and Recover Value.</h2>
                <div className="space-y-space-md w-full mb-space-xl">
                  {VALUE_STEPS.map((s) => (
                    <div key={s.n} className="flex gap-space-md p-4 rounded-xl bg-surface shadow-sm">
                      <span className="text-lg font-headline font-bold text-primary">{s.n}</span>
                      <div>
                        <h3 className="text-base font-headline font-semibold text-on-surface mb-1">{s.title}</h3>
                        <p className="text-sm text-on-surface-variant">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollTo('contact')} className="px-6 py-3.5 rounded-lg bg-primary text-on-primary text-label-lg font-label-lg hover:bg-primary/90 transition-colors shadow-md">Request a Pickup</button>
              </div>
            </div>
          </section>

          {/* 5. HOW IT WORKS */}
          <section id="how-it-works" className="py-space-2xl bg-light-bg">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <span className="text-label-sm font-label-sm text-primary tracking-wider uppercase bg-primary-container/10 px-3 py-1 rounded-full">HOW IT WORKS</span>
                <h2 className="text-headline-md lg:text-headline-lg font-headline font-bold text-on-surface mt-space-sm mb-space-sm">From Scrap to Payment in 4 Simple Steps</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
                {STEPS.map((s) => (
                  <div key={s.n} className="bg-surface rounded-xl p-space-lg shadow-sm flex flex-col relative">
                    <div className="text-4xl font-headline font-bold text-emerald/20 mb-space-md">{s.n}</div>
                    <h3 className="text-headline-sm font-headline font-semibold text-on-surface mb-space-xs">{s.title}</h3>
                    <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. RESIDENTIAL + BUSINESS */}
          <section className="py-space-2xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
              <div className="bg-surface-container-low rounded-2xl p-space-2xl shadow-md flex flex-col justify-between relative overflow-hidden">
                <div>
                  <span className="text-label-sm font-label-sm text-primary tracking-wider uppercase bg-primary-container/10 px-3 py-1 rounded-full mb-space-md inline-block">FOR HOMES</span>
                  <h3 className="text-headline-md font-headline font-bold text-on-surface mb-space-md">Residential Scrap Collection</h3>
                  <p className="text-body-lg text-on-surface-variant mb-space-xl">Clear out old metal, appliances, electronics and household scrap without the hassle.</p>
                </div>
                <button onClick={() => scrollTo('contact')} className="px-6 py-3.5 rounded-lg bg-primary text-on-primary text-label-lg font-label-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 w-fit">
                  Book Home Pickup<Icon name="arrow_forward" />
                </button>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-space-2xl shadow-md flex flex-col justify-between relative overflow-hidden">
                <div>
                  <span className="text-label-sm font-label-sm text-primary tracking-wider uppercase bg-primary-container/10 px-3 py-1 rounded-full mb-space-md inline-block">FOR BUSINESSES</span>
                  <h3 className="text-headline-md font-headline font-bold text-on-surface mb-space-md">Commercial & Warehouse Scrap</h3>
                  <p className="text-body-lg text-on-surface-variant mb-space-xl">Manage office, commercial, warehouse and bulk scrap collection with a convenient pickup process.</p>
                </div>
                <button onClick={() => scrollTo('contact')} className="px-6 py-3.5 rounded-lg bg-primary text-on-primary text-label-lg font-label-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 w-fit">
                  Request Business Pickup<Icon name="arrow_forward" />
                </button>
              </div>
            </div>
          </section>

          {/* 7. BULK CTA */}
          <section className="py-space-2xl bg-[#14532D] text-white">
            <div className="max-w-3xl mx-auto px-gutter text-center">
              <h2 className="text-headline-md lg:text-headline-lg font-headline font-bold mb-space-md">Have a Large Quantity of Scrap?</h2>
              <p className="text-body-lg text-inverse-on-surface/90 mb-space-xl">We work with businesses, offices, warehouses, shops and other organizations that need convenient bulk scrap collection.</p>
              <div className="flex flex-wrap justify-center gap-space-md mb-space-xl">
                <button onClick={() => scrollTo('contact')} className="px-6 py-3.5 rounded-lg bg-emerald text-on-primary text-label-lg font-label-lg hover:bg-emerald/90 transition-colors shadow-md">Schedule Bulk Pickup</button>
                <a href={WA_LINK('Hi AB Traders, I have a large quantity of scrap for bulk pickup.')} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-lg bg-surface/10 border border-white/30 text-white text-label-lg font-label-lg hover:bg-surface/20 transition-colors">Talk to Our Team</a>
              </div>
              <p className="text-xs uppercase tracking-wider text-inverse-on-surface/70 font-label-sm">Commercial • Industrial • Office • Warehouse</p>
            </div>
          </section>

          {/* 8. WHY CHOOSE US */}
          <section id="why-us" className="py-space-2xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <h2 className="text-headline-md lg:text-headline-lg font-headline font-bold text-on-surface">Why Customers Choose a Simpler Scrap-Selling Experience</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {WHY.map((w) => (
                  <div key={w.title} className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center mb-space-md"><Icon name={w.icon} /></div>
                    <h3 className="text-headline-sm font-headline font-semibold text-on-surface mb-space-xs">{w.title}</h3>
                    <p className="text-body-sm text-on-surface-variant">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 9. LOCAL HYDERABAD */}
          <section className="py-space-2xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
              <div className="lg:col-span-6">
                <span className="text-label-sm font-label-sm text-primary tracking-wider uppercase bg-primary-container/10 px-3 py-1 rounded-full mb-space-sm inline-block">SCRAP PICKUP IN HYDERABAD</span>
                <h2 className="text-headline-md lg:text-headline-lg font-headline font-bold text-on-surface mb-space-md">Local Scrap Collection, Made Convenient.</h2>
                <p className="text-body-lg text-on-surface-variant mb-space-xl">Looking to sell scrap in Hyderabad? Contact our team to check pickup availability for your location and the type and quantity of materials you have.</p>
                <div className="flex flex-wrap gap-2 mb-space-xl">
                  {AREAS.map((a) => (
                    <span key={a} className="px-3.5 py-1.5 rounded-full bg-surface text-on-surface text-sm shadow-sm">{a}</span>
                  ))}
                </div>
                <p className="text-xs text-on-surface-variant mb-space-lg italic">Pickup availability may vary by material, quantity and location.</p>
                <button onClick={() => scrollTo('contact')} className="px-6 py-3.5 rounded-lg bg-primary text-on-primary text-label-lg font-label-lg hover:bg-primary/90 transition-colors inline-block">Check Pickup Availability</button>
              </div>
              <div className="lg:col-span-6">
                <div className="w-full h-96 bg-cover bg-center rounded-2xl shadow-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpRqFb1pYWcjtMerdiTdi_RPdJZfOkAe8RGpjibLM4Ju8TILr1fw9TmrCtyRW4SeVWv4ZT1hpyMFQooC4WJv9jn0tQeIz2dCK-ytcebRcmoN3NI8Y3SBpGeVwp75jROlUy6tkMabTCGpHB6PpXFnAzHEvrSQovuTMY5OM7Y9lz3NY_wia54YU9qsjsGVHHoOvgRzrLboAPEFmzuslnx5HLAd-IMDE-KRj-qYn0ggLyBFo8vp2pGxXXeA')" }} />
              </div>
            </div>
          </section>

          {/* 10. TESTIMONIALS */}
          <section className="py-space-2xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <h2 className="text-headline-md lg:text-headline-lg font-headline font-bold text-on-surface">What Our Customers Say</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex text-warm-amber mb-space-md">★★★★★</div>
                      <p className="text-body-md text-on-surface-variant mb-space-lg">&ldquo;{t.text}&rdquo;</p>
                    </div>
                    <div>
                      <p className="text-base font-headline font-semibold text-on-surface">{t.name}</p>
                      <p className="text-xs text-on-surface-variant">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. FAQ */}
          <section id="faqs" className="py-space-2xl bg-surface-container-low">
            <div className="max-w-4xl mx-auto px-gutter">
              <div className="text-center mb-space-2xl">
                <h2 className="text-headline-md lg:text-headline-lg font-headline font-bold text-on-surface">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-space-md">
                {FAQS.map((f) => (
                  <details key={f.q} className="group bg-surface rounded-xl p-space-md shadow-sm">
                    <summary className="flex justify-between items-center font-headline font-semibold text-on-surface cursor-pointer list-none">
                      {f.q}
                      <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="text-body-sm text-on-surface-variant mt-space-sm pt-space-sm border-t border-outline-variant/20">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* 12. CONTACT / PICKUP FORM */}
          <section id="contact" className="py-space-2xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
              <div className="lg:col-span-7 bg-surface-container-low rounded-2xl p-space-2xl shadow-md">
                <h2 className="text-headline-md font-headline font-bold text-on-surface mb-space-sm">Request a Scrap Pickup</h2>
                <p className="text-body-md text-on-surface-variant mb-space-xl">Fill out the form below and our team will get in touch to confirm your schedule.</p>

                {submitted ? (
                  <div className="rounded-xl bg-emerald/10 border border-emerald/40 p-space-xl text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald text-on-primary flex items-center justify-center mx-auto mb-space-md"><Icon name="check" className="text-[28px]" /></div>
                    <h3 className="text-headline-sm font-headline font-bold text-on-surface mb-space-xs">Pickup Request Received!</h3>
                    <p className="text-body-md text-on-surface-variant mb-space-lg">Thank you. Our team will contact you shortly to confirm your pickup schedule.</p>
                    <div className="flex flex-wrap justify-center gap-space-md">
                      <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-lg bg-primary text-on-primary text-label-lg font-label-lg hover:bg-primary/90 transition-colors">Submit Another Request</button>
                      <a href={WA_LINK('Hi AB Traders, I just submitted a pickup request.')} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-emerald text-on-primary text-label-lg font-label-lg hover:bg-emerald/90 transition-colors inline-flex items-center gap-2"><Icon name="chat" className="text-[18px]" />WhatsApp Us</a>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-space-md" onSubmit={submitPickup}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div>
                        <label className="block text-sm font-label-md text-on-surface mb-space-xs">Full Name</label>
                        <input name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-sm focus:outline-emerald" placeholder="Enter your full name" type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-label-md text-on-surface mb-space-xs">Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-sm focus:outline-emerald" placeholder="+91 98765 43210" type="tel" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div>
                        <label className="block text-sm font-label-md text-on-surface mb-space-xs">Scrap Type</label>
                        <select name="scrapType" value={form.scrapType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-sm focus:outline-emerald">
                          {SCRAP_TYPES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-label-md text-on-surface mb-space-xs">Approximate Quantity</label>
                        <input name="quantity" value={form.quantity} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-sm focus:outline-emerald" placeholder="e.g. 20 kg or 1 truckload" type="text" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div>
                        <label className="block text-sm font-label-md text-on-surface mb-space-xs">Pickup Area / Locality</label>
                        <input name="area" value={form.area} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-sm focus:outline-emerald" placeholder="e.g. Gachibowli, Hyderabad" type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-label-md text-on-surface mb-space-xs">Preferred Pickup Date</label>
                        <input name="pickupDate" value={form.pickupDate} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-sm focus:outline-emerald" type="date" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-label-md text-on-surface mb-space-xs">Additional Message (Optional)</label>
                      <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-sm focus:outline-emerald" placeholder="Any specific instructions..." rows={3} />
                    </div>
                    {error && <p className="text-sm text-error font-medium">{error}</p>}
                    <button disabled={submitting} className="w-full py-4 rounded-lg bg-primary text-on-primary text-label-lg font-label-lg hover:bg-primary/90 transition-colors shadow-md disabled:opacity-60" type="submit">
                      {submitting ? 'Submitting...' : 'Request Pickup'}
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-label-sm font-label-sm text-primary tracking-wider uppercase bg-primary-container/10 px-3 py-1 rounded-full mb-space-sm inline-block">GET IN TOUCH</span>
                  <h2 className="text-headline-md font-headline font-bold text-on-surface mb-space-md">We Are Here to Help</h2>
                  <p className="text-body-lg text-on-surface-variant mb-space-xl">Have questions about rates, bulk pickups, or service availability? Reach out through any of our channels.</p>
                </div>
                <div className="space-y-space-lg">
                  <a href={`tel:+${PHONE}`} className="flex items-center gap-space-md p-4 rounded-xl bg-surface-container-low hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center shrink-0"><Icon name="call" /></div>
                    <div>
                      <p className="text-xs text-on-surface-variant">Call Us Anytime</p>
                      <p className="text-base font-headline font-semibold text-on-surface">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                  <a href={WA_LINK('Hi AB Traders, I have a question about selling scrap.')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-space-md p-4 rounded-xl bg-surface-container-low hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0"><Icon name="chat" style={{ fontVariationSettings: "'FILL' 1" }} /></div>
                    <div>
                      <p className="text-xs text-on-surface-variant">WhatsApp Support</p>
                      <p className="text-base font-headline font-semibold text-on-surface">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-space-md p-4 rounded-xl bg-surface-container-low">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center shrink-0"><Icon name="location_on" /></div>
                    <div>
                      <p className="text-xs text-on-surface-variant">Location</p>
                      <p className="text-base font-headline font-semibold text-on-surface">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md p-4 rounded-xl bg-surface-container-low">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center shrink-0"><Icon name="schedule" /></div>
                    <div>
                      <p className="text-xs text-on-surface-variant">Working Hours</p>
                      <p className="text-base font-headline font-semibold text-on-surface">Mon - Sun: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low py-space-2xl mb-16 lg:mb-0">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-space-xl mb-space-2xl">
          <div>
            <div className="flex items-center gap-space-sm mb-space-md">
              <img alt="AB Traders Logo" className="h-8 w-auto object-contain rounded-md" src={LOGO} />
              <span className="text-lg font-headline font-bold text-primary">AB Traders</span>
            </div>
            <p className="text-sm text-on-surface-variant mb-space-md">AB Traders is Hyderabad&apos;s most trusted door-to-door scrap buyers. We offer transparent pricing and instant digital payments for all household, commercial, and industrial scrap.</p>
            <div className="flex items-center gap-space-sm">
              <Icon name="call" className="text-primary" />
              <span className="text-sm text-on-surface font-label-md">{PHONE_DISPLAY}</span>
            </div>
          </div>
          <div>
            <h4 className="text-base font-headline font-semibold text-on-surface mb-space-md">Quick Links</h4>
            <ul className="space-y-space-sm">
              {NAV.filter((n) => ['home', 'about', 'scrap-materials', 'how-it-works', 'contact'].includes(n.path)).map((n) => (
                <li key={n.path}><button onClick={() => scrollTo(n.path)} className="text-sm text-on-surface-variant hover:text-primary transition-colors">{n.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-headline font-semibold text-on-surface mb-space-md">Service Areas</h4>
            <ul className="space-y-space-sm">
              {['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City', 'Madhapur'].map((a) => (
                <li key={a}><span className="text-sm text-on-surface-variant">{a}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-headline font-semibold text-on-surface mb-space-md">Newsletter</h4>
            <p className="text-sm text-on-surface-variant mb-space-md">Subscribe for daily scrap rate updates and pickup offers across Hyderabad.</p>
            {subscribed ? (
              <p className="text-sm text-emerald font-medium">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={subscribe} className="flex gap-space-sm">
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 rounded-lg border border-outline-variant bg-surface text-sm flex-1 focus:outline-emerald" placeholder="Enter your email" type="email" />
                <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-label-md" type="submit">Join</button>
              </form>
            )}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-gutter pt-space-lg border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between text-sm text-on-surface-variant">
          <p>© 2024 AB Traders. All rights reserved.</p>
          <div className="flex gap-space-md mt-space-sm sm:mt-0">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface-container-highest border-t border-outline-variant/20 py-3 px-4 flex lg:hidden items-center justify-around z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <a className="flex flex-col items-center text-primary" href={`tel:+${PHONE}`}><Icon name="call" className="text-[22px]" /><span className="text-[11px] font-label-sm mt-0.5">Call Us</span></a>
        <a className="flex flex-col items-center text-emerald" href={WA_LINK('Hi AB Traders, I would like to sell my scrap.')} target="_blank" rel="noopener noreferrer"><Icon name="chat" className="text-[22px]" /><span className="text-[11px] font-label-sm mt-0.5">WhatsApp</span></a>
        <button className="flex flex-col items-center px-4 py-1.5 rounded-lg bg-primary text-on-primary" onClick={() => scrollTo('contact')}><Icon name="local_shipping" className="text-[20px]" /><span className="text-[11px] font-label-md mt-0.5">Request Pickup</span></button>
      </div>
    </div>
  )
}

export default App
