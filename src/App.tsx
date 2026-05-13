import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Dumbbell,
  HeartPulse,
  Leaf,
  Menu,
  Quote,
  Salad,
  Sparkles,
  SunMedium,
  UserRoundCheck,
  X,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Method', href: '#method' },
  { label: 'Results', href: '#testimonials' },
]

const services = [
  {
    title: 'Fitness Coaching',
    icon: Dumbbell,
    text: 'Workouts, strength training, mobility, conditioning, and body composition goals built around your life.',
  },
  {
    title: 'Wellness Coaching',
    icon: HeartPulse,
    text: 'Habits, stress, mindset, sleep, routines, and work life balance that support the way you want to feel.',
  },
  {
    title: 'Nutrition Coaching',
    icon: Salad,
    text: 'Meal guidance, macros, healthy eating habits, and sustainable food choices without extreme rules.',
  },
  {
    title: 'Lifestyle Coaching',
    icon: SunMedium,
    text: 'Daily behaviors, long term health goals, accountability, and the support needed to create lasting change.',
  },
]

const method = [
  {
    title: 'Assess',
    text: 'Understand your goals, habits, lifestyle, health history, schedule, and starting point.',
  },
  {
    title: 'Align',
    text: 'Build a realistic plan that fits your life, energy, responsibilities, and current fitness level.',
  },
  {
    title: 'Transform',
    text: 'Improve strength, health, confidence, and consistency with steady support and clear direction.',
  },
]

const reasons = [
  'Sustainable results',
  'No extreme dieting',
  'Personalized support',
  'Fitness and wellness together',
  'Real life habit building',
  'Compassionate accountability',
]

const testimonials = [
  {
    name: 'Client Name',
    text: 'Becky helped me stop starting over. I finally have structure that feels realistic and support that keeps me consistent.',
  },
  {
    name: 'Client Name',
    text: 'The coaching feels personal, calm, and clear. I feel stronger in my body and more in control of my daily choices.',
  },
  {
    name: 'Client Name',
    text: 'I never felt judged or pushed into extremes. The plan helped me build habits I can actually keep.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Core Soul Wellness and Fitness home">
      <img
        src="/brand/core-soul-logo.png"
        alt="Core Soul Wellness and Fitness logo"
        className={compact ? 'h-11 w-11 rounded-full object-contain' : 'h-12 w-12 rounded-full object-contain sm:h-14 sm:w-14'}
      />
      <span className="leading-none">
        <span className="block font-serif text-lg font-semibold text-ink sm:text-xl">Core Soul</span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-olive-dark sm:text-xs">
          Wellness and Fitness
        </span>
      </span>
    </a>
  )
}

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string
  title: string
  text: string
  dark?: boolean
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className={`mb-4 text-sm font-bold uppercase tracking-[0.24em] ${dark ? 'text-blush-light' : 'text-olive-dark'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-serif text-4xl font-semibold leading-tight sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? 'text-soft/72' : 'text-ink/70'}`}>{text}</p>
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="home" className="min-h-screen overflow-hidden bg-soft text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-soft/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo compact />
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-ink/70 transition hover:text-olive-dark">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#cta"
            className="hidden rounded-full bg-ink px-5 py-3 text-sm font-bold text-soft transition hover:bg-olive-dark lg:inline-flex"
          >
            Book a Free Consultation
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-full border border-olive/20 bg-white/60 text-ink lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen ? (
          <div className="border-t border-white/60 bg-soft px-5 py-5 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white/70 px-4 py-3 font-semibold text-ink/75"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-ink px-4 py-3 text-center font-bold text-soft"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="relative flex min-h-dvh items-center px-5 pb-20 pt-32 sm:px-8 lg:pt-36">
          <div className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-blush-light/70 blur-3xl" />
          <div className="absolute right-[-10rem] top-32 h-[28rem] w-[28rem] rounded-full bg-olive/25 blur-3xl" />
          <div className="absolute bottom-8 left-1/3 h-72 w-72 rounded-full bg-blush/35 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-white/55 px-4 py-2 text-sm font-semibold text-olive-dark shadow-soft">
                <Sparkles size={16} />
                Premium coaching for sustainable transformation
              </div>
              <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-ink sm:text-7xl lg:text-8xl">
                Build Strength. Create Balance. Thrive Fully.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
                Personalized fitness, wellness, nutrition, and lifestyle coaching designed to help you feel stronger,
                healthier, and more in control of your life.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 font-bold text-white shadow-soft transition hover:bg-olive-dark"
                >
                  Start Your Journey
                  <ArrowRight className="transition group-hover:translate-x-1" size={19} />
                </a>
                <a
                  href="#coaching"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-olive/25 bg-white/60 px-7 py-4 font-bold text-ink transition hover:border-olive hover:bg-white"
                >
                  Explore Coaching
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="relative"
            >
              <div className="rounded-[2.5rem] bg-gradient-to-br from-white/80 via-blush-light/80 to-olive/20 p-4 shadow-card">
                <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-soft">
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blush/30 blur-3xl" />
                  <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-olive/35 blur-3xl" />
                  <img
                    src="/brand/core-soul-logo.png"
                    alt="Core Soul Wellness and Fitness brand mark"
                    className="relative mx-auto h-40 w-40 rounded-full object-contain sm:h-52 sm:w-52"
                  />
                  <div className="relative mt-10 grid gap-4 sm:grid-cols-2">
                    {['Strength', 'Balance', 'Confidence', 'Consistency'].map((item) => (
                      <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                        <Check className="mb-4 text-blush-light" size={20} />
                        <p className="font-serif text-2xl text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] bg-gradient-to-br from-olive to-olive-dark p-4 shadow-card"
            >
              <div className="grid aspect-[4/5] place-items-center rounded-[1.55rem] border border-white/15 bg-soft/95 p-8 text-center">
                <div>
                  <div className="mx-auto mb-6 grid h-28 w-28 place-items-center rounded-full bg-blush-light">
                    <UserRoundCheck className="text-olive-dark" size={42} />
                  </div>
                  <p className="font-serif text-3xl font-semibold text-ink">Becky</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-olive-dark">Founder photo placeholder</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">Founder Story</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                “I know what transformation feels like because I’ve lived it.”
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                Core Soul was built from real life change. Becky reversed type 2 diabetes, lost over 110 lbs, overcame
                addiction, and rebuilt a healthier, stronger, more balanced life through steady choices and support.
              </p>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                Her coaching is grounded in compassion, structure, and accountability. The goal is not perfection. It is
                helping women feel capable, cared for, and confident as they create a lifestyle they can keep.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Reversed type 2 diabetes', 'Lost over 110 lbs', 'Overcame addiction', 'Built lasting balance'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/60 p-4">
                    <BadgeCheck className="shrink-0 text-olive-dark" size={20} />
                    <span className="font-semibold text-ink/78">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="coaching" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Coaching Services"
              title="Personal support for your whole life, not just your workouts."
              text="Every plan combines fitness, nutrition, wellness, and lifestyle habits so progress feels clear, supported, and sustainable."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group rounded-[2rem] border border-white/70 bg-white/62 p-7 shadow-soft transition hover:-translate-y-1 hover:bg-white hover:shadow-card"
                  >
                    <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-blush-light text-olive-dark transition group-hover:bg-olive group-hover:text-white">
                      <Icon size={25} />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-4 leading-7 text-ink/68">{service.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="method" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-ink px-5 py-16 text-soft shadow-card sm:px-10 lg:px-14">
            <SectionHeader
              eyebrow="Transformation Method"
              title="A simple path that makes change feel possible."
              text="The process is designed to remove confusion, create momentum, and help you build consistency without losing yourself in the process."
              dark
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {method.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-7"
                >
                  <span className="mb-8 inline-grid h-12 w-12 place-items-center rounded-full bg-blush text-ink font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-serif text-3xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 leading-7 text-soft/72">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">Why Core Soul</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Strong, soft, focused, and built for real life.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                This is coaching for women who want to feel better in their bodies and calmer in their routines. It is
                supportive, direct, and made for lasting change.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-3xl bg-white/65 p-5 shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-olive text-white">
                    <Check size={18} />
                  </span>
                  <p className="font-semibold text-ink/78">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Client Stories"
              title="Support that feels personal, steady, and honest."
              text="Placeholder testimonials can be replaced with real client stories as the brand grows."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[2rem] bg-white/70 p-7 shadow-soft"
                >
                  <Quote className="mb-8 text-blush" size={32} />
                  <p className="text-lg leading-8 text-ink/72">“{testimonial.text}”</p>
                  <p className="mt-7 font-serif text-2xl font-semibold text-ink">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="px-5 py-20 sm:px-8 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-olive via-olive-dark to-ink px-6 py-20 text-center text-white shadow-card sm:px-12"
          >
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blush/30 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blush-light/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <Leaf className="mx-auto mb-6 text-blush-light" size={34} />
              <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
                Ready to become the strongest, healthiest version of yourself?
              </h2>
              <a
                href="mailto:hello@coresoulwellness.com"
                className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-soft px-8 py-4 font-bold text-ink transition hover:bg-blush-light"
              >
                Book a Free Consultation
                <ArrowRight size={19} />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-olive/15 px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md leading-7 text-ink/68">
              Fitness, wellness, nutrition, and lifestyle coaching for women ready to build strength, balance, and lasting confidence.
            </p>
          </div>
          <div>
            <p className="mb-4 font-bold text-ink">Quick Links</p>
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-ink/65 transition hover:text-olive-dark">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 font-bold text-ink">Contact</p>
            <div className="grid gap-3 text-ink/65">
              <span>hello@coresoulwellness.com</span>
              <span>Consultations available by appointment</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
