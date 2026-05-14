import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Dumbbell,
  HeartPulse,
  Leaf,
  Mail,
  Menu,
  MessageCircle,
  Quote,
  Salad,
  ShieldCheck,
  Sparkles,
  Star,
  SunMedium,
  Timer,
  TrendingUp,
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
    highlight: 'Strength, mobility, conditioning',
  },
  {
    title: 'Wellness Coaching',
    icon: HeartPulse,
    text: 'Habits, stress, mindset, sleep, routines, and work life balance that support the way you want to feel.',
    highlight: 'Stress, sleep, consistency',
  },
  {
    title: 'Nutrition Coaching',
    icon: Salad,
    text: 'Meal guidance, macros, healthy eating habits, and sustainable food choices without extreme rules.',
    highlight: 'Realistic food structure',
  },
  {
    title: 'Lifestyle Coaching',
    icon: SunMedium,
    text: 'Daily behaviors, long term health goals, accountability, and the support needed to create lasting change.',
    highlight: 'Accountability that fits life',
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

const proofPoints = [
  {
    value: '110+',
    label: 'lbs released through steady lifestyle change',
  },
  {
    value: 'Type 2',
    label: 'diabetes reversed with consistent health habits',
  },
  {
    value: 'Daily',
    label: 'routines rebuilt for strength, balance, and recovery',
  },
]

const testimonials = [
  {
    name: 'Core Soul client',
    text: 'Becky helped me stop starting over. I finally have structure that feels realistic and support that keeps me consistent.',
  },
  {
    name: 'Core Soul client',
    text: 'The coaching feels personal, calm, and clear. I feel stronger in my body and more in control of my daily choices.',
  },
  {
    name: 'Core Soul client',
    text: 'I never felt judged or pushed into extremes. The plan helped me build habits I can actually keep.',
  },
]

const callSteps = [
  { icon: MessageCircle, title: 'Talk through goals', text: 'Share where you are, what has felt hard, and what you want to change.' },
  { icon: ClipboardCheck, title: 'Map the first plan', text: 'Get a simple starting direction for workouts, nutrition, routines, and support.' },
  { icon: CalendarCheck, title: 'Choose the next step', text: 'If it feels aligned, Becky will recommend the coaching path that fits best.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const floatIn = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-blush via-olive to-ink"
      style={{ scaleX }}
    />
  )
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
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroCardY = useTransform(scrollYProgress, [0, 0.18], [0, shouldReduceMotion ? 0 : 44])
  const heroCardRotate = useTransform(scrollYProgress, [0, 0.18], [0, shouldReduceMotion ? 0 : -1.5])
  const heroCopyY = useTransform(scrollYProgress, [0, 0.16], [0, shouldReduceMotion ? 0 : -18])
  const heroCopyOpacity = useTransform(scrollYProgress, [0, 0.2], [1, shouldReduceMotion ? 1 : 0.84])

  return (
    <div id="home" className="min-h-screen overflow-hidden bg-soft text-ink">
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-bold focus:text-soft"
      >
        Skip to main content
      </a>
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
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-olive/20 bg-white/60 text-ink lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen ? (
          <div id="mobile-menu" className="border-t border-white/60 bg-soft px-5 py-5 lg:hidden">
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

      <main id="main-content">
        <section className="relative flex min-h-dvh items-center border-b border-white/60 bg-[radial-gradient(circle_at_top_left,rgba(239,217,209,0.75),transparent_32rem),linear-gradient(180deg,#f4eeed_0%,#fffafa_100%)] px-5 pb-16 pt-32 sm:px-8 lg:pt-36">
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, ease: 'easeOut' }}
              style={{ y: heroCopyY, opacity: heroCopyOpacity }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-white/55 px-4 py-2 text-sm font-semibold text-olive-dark shadow-soft">
                <Sparkles size={16} />
                Premium coaching for sustainable transformation
              </div>
              <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-ink sm:text-7xl lg:text-8xl">
                Build strength, balance, and a body you trust.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
                Personalized fitness, wellness, nutrition, and lifestyle coaching for women who want sustainable
                change without punishment, extremes, or starting over every Monday.
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
              <div className="mt-8 grid max-w-2xl gap-3 text-sm font-semibold text-ink/70 sm:grid-cols-3">
                {['Free clarity call', 'No extreme dieting', 'Built around real life'].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.45 + item.length * 0.006, ease: 'easeOut' }}
                    className="flex items-center gap-2"
                  >
                    <ShieldCheck className="shrink-0 text-olive-dark" size={18} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 hidden w-fit items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-ink/50 transition hover:text-olive-dark lg:flex"
              >
                <span className="relative h-10 w-6 rounded-full border border-olive/35">
                  <motion.span
                    className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-olive"
                    animate={shouldReduceMotion ? undefined : { y: [0, 14, 0], opacity: [1, 0.35, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </span>
                Scroll
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              style={{ y: heroCardY, rotate: heroCardRotate }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-card backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.55rem] bg-ink p-7 text-soft sm:p-8">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blush via-blush-light to-olive" />
                  <img
                    src="/brand/core-soul-logo.png"
                    alt="Core Soul Wellness and Fitness brand mark"
                    className="relative mx-auto h-32 w-32 rounded-full object-contain sm:h-44 sm:w-44"
                  />
                  <div className="relative mt-8 rounded-[1.35rem] border border-white/10 bg-white/[0.08] p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush-light">Core outcomes</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {['Strength', 'Balance', 'Confidence', 'Consistency'].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blush text-ink">
                            <Check size={17} />
                          </span>
                          <p className="font-serif text-2xl text-white">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
                    {proofPoints.map((point) => (
                      <div key={point.value} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                        <p className="font-serif text-2xl font-semibold text-blush-light">{point.value}</p>
                        <p className="mt-2 text-xs font-semibold leading-5 text-soft/70">{point.label}</p>
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
                <div className="max-w-sm">
                  <div className="mx-auto mb-6 grid h-28 w-28 place-items-center rounded-full bg-blush-light shadow-soft">
                    <UserRoundCheck className="text-olive-dark" size={42} />
                  </div>
                  <p className="font-serif text-3xl font-semibold text-ink">Becky</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-olive-dark">Founder and coach</p>
                  <p className="mt-5 leading-7 text-ink/68">
                    A lived-transformation coach helping women rebuild health with compassion, structure, and steady action.
                  </p>
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

        <section className="px-5 py-12 sm:px-8 lg:py-20" aria-labelledby="proof-heading">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/70 bg-white/55 p-5 shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55 }}
              >
                <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-blush-light text-olive-dark">
                  <TrendingUp size={24} />
                </div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">Lived Transformation</p>
                <h2 id="proof-heading" className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                  Real change, built one grounded choice at a time.
                </h2>
                <p className="mt-5 text-base leading-8 text-ink/70 sm:text-lg">
                  Becky’s story gives the coaching a different kind of credibility. She understands the courage,
                  patience, and structure it takes to rebuild your health from the inside out.
                </p>
              </motion.div>
              <motion.div
                variants={staggerGroup}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {proofPoints.map((point, index) => (
                  <motion.div
                    key={point.value}
                    variants={floatIn}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-[1.7rem] bg-soft p-6 shadow-soft"
                  >
                    <p className="font-serif text-4xl font-semibold text-olive-dark">{point.value}</p>
                    <p className="mt-4 text-sm font-semibold leading-6 text-ink/70">{point.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="coaching" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Coaching Services"
              title="Personal support for your whole life, not just your workouts."
              text="Every plan combines fitness, nutrition, wellness, and lifestyle habits so progress feels clear, supported, and sustainable."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            >
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    variants={floatIn}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group rounded-[2rem] border border-white/70 bg-white/62 p-7 shadow-soft transition hover:-translate-y-1 hover:bg-white hover:shadow-card"
                  >
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blush-light text-olive-dark transition group-hover:bg-olive group-hover:text-white">
                        <Icon size={25} />
                      </div>
                      <Star className="mt-1 text-olive/55 transition group-hover:text-olive-dark" size={20} />
                    </div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-olive-dark">{service.highlight}</p>
                    <h3 className="font-serif text-2xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-4 leading-7 text-ink/68">{service.text}</p>
                  </motion.div>
                )
              })}
            </motion.div>
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
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-14 grid gap-5 lg:grid-cols-3"
            >
              {method.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={floatIn}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-7"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-blush text-ink font-bold">
                      {index + 1}
                    </span>
                    <Timer className="text-blush-light/70" size={22} />
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 leading-7 text-soft/72">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
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
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  variants={floatIn}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-3xl bg-white/65 p-5 shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-olive text-white">
                    <Check size={18} />
                  </span>
                  <p className="font-semibold text-ink/78">{reason}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="testimonials" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Client Stories"
              title="Support that feels personal, steady, and honest."
              text="Early feedback is centered on the qualities that matter most: clear structure, realistic habits, and coaching that feels human."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-14 grid gap-5 lg:grid-cols-3"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  variants={floatIn}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[2rem] bg-white/70 p-7 shadow-soft"
                >
                  <Quote className="mb-8 text-blush" size={32} />
                  <p className="text-lg leading-8 text-ink/72">“{testimonial.text}”</p>
                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-olive/10 pt-5">
                    <p className="font-serif text-2xl font-semibold text-ink">{testimonial.name}</p>
                    <div className="flex text-olive-dark" aria-label="5 star rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={15} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="cta" className="px-5 py-20 sm:px-8 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-ink text-white shadow-card lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="bg-gradient-to-br from-olive via-olive-dark to-ink px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
              <Leaf className="mb-6 text-blush-light" size={34} />
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-blush-light">Free Consultation</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Ready for a plan that finally fits your real life?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-soft/78">
                Start with a no-pressure clarity call. You will talk through your goals, your current routine, and the
                kind of support that would make change feel doable.
              </p>
              <a
                href="mailto:hello@coresoulwellness.com"
                className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-soft px-8 py-4 font-bold text-ink transition hover:bg-blush-light"
              >
                Book a Free Consultation
                <ArrowRight size={19} />
              </a>
            </div>
            <div className="bg-white px-6 py-10 text-ink sm:px-10 lg:px-12 lg:py-16">
              <div className="mb-8 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blush-light text-olive-dark">
                  <Mail size={23} />
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold">What happens next</p>
                  <p className="mt-1 text-sm font-semibold text-ink/58">Simple, calm, and clear from the first email.</p>
                </div>
              </div>
              <motion.div
                variants={staggerGroup}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="grid gap-4"
              >
                {callSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.title}
                      variants={floatIn}
                      transition={{ duration: 0.48, delay: index * 0.07 }}
                      className="flex gap-4 rounded-2xl border border-olive/12 bg-soft/70 p-5"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-olive text-white">
                        <Icon size={19} />
                      </span>
                      <div>
                        <h3 className="font-bold text-ink">{step.title}</h3>
                        <p className="mt-2 leading-7 text-ink/68">{step.text}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
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
