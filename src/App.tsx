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
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  TrendingUp,
  UserRoundCheck,
  X,
} from 'lucide-react'
import { useState, type PointerEvent } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'EFT Tapping', href: '#eft' },
  { label: 'Core Clearing', href: '#core-clearing' },
]

const services = [
  {
    title: 'Healthy Coping Skills',
    icon: HeartPulse,
    text: 'Personalized support to build healthier responses, steadier habits, and practical tools you can use in real life.',
    highlight: 'Support for daily life',
  },
  {
    title: 'Emotional Regulation',
    icon: ShieldCheck,
    text: 'EFT Tapping and Core Clearing techniques to help calm the nervous system and create healthier emotional responses.',
    highlight: 'Calm, clarity, resilience',
  },
  {
    title: 'Breakthrough Work',
    icon: Sparkles,
    text: 'Support for emotional blocks, limiting beliefs, cravings, and self-sabotaging patterns that can keep you stuck.',
    highlight: 'Release old patterns',
  },
  {
    title: 'Strength and Confidence',
    icon: Dumbbell,
    text: 'At-home workouts or gym confidence built around your needs, your goals, and your unique starting point.',
    highlight: 'Fitness that meets you',
  },
]

const method = [
  {
    title: 'Release',
    text: 'Use tapping to help release emotional stress, overwhelm, and unresolved experiences held in the body.',
  },
  {
    title: 'Reprogram',
    text: 'Create new neural pathways so unhelpful patterns can shift into calmer, healthier responses.',
  },
  {
    title: 'Regulate',
    text: 'Build a lifelong self-regulation tool for emotions, cravings, clarity, grounding, and personal growth.',
  },
]

const reasons = [
  'Release subconscious emotional blocks',
  'Heal unresolved trauma and fear-based patterns',
  'Shift limiting beliefs and self-sabotaging behaviors',
  'Reduce emotional overwhelm and stress responses',
  'Create greater clarity, confidence, and inner balance',
  'Support personal growth and emotional freedom',
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

const callSteps = [
  { icon: MessageCircle, title: 'Talk through goals', text: 'Share where you are, what has felt hard, and what you want to change.' },
  { icon: ClipboardCheck, title: 'Personalize support', text: 'Explore the fitness, EFT, or Core Clearing approach that fits your specific needs.' },
  { icon: CalendarCheck, title: 'Create lasting change', text: 'Move forward with a session plan designed to support transformation from the inside out.' },
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
    <a href="#home" className="flex items-center" aria-label="Core Soul Wellness and Fitness home">
      <img
        src="/brand/core-soul-logo.png"
        alt="Core Soul Wellness and Fitness logo"
        className={compact ? 'h-14 w-48 object-contain object-left' : 'h-24 w-72 object-contain object-left'}
      />
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
  const [spotlight, setSpotlight] = useState({ x: 50, y: 28, active: false })
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroCardY = useTransform(scrollYProgress, [0, 0.18], [0, shouldReduceMotion ? 0 : 44])
  const heroCardRotate = useTransform(scrollYProgress, [0, 0.18], [0, shouldReduceMotion ? 0 : -1.5])
  const heroCopyY = useTransform(scrollYProgress, [0, 0.16], [0, shouldReduceMotion ? 0 : -18])
  const heroCopyOpacity = useTransform(scrollYProgress, [0, 0.2], [1, shouldReduceMotion ? 1 : 0.84])
  const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType === 'touch') return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    const tiltX = ((event.clientY - rect.top - rect.height / 2) / rect.height) * -7
    const tiltY = ((event.clientX - rect.left - rect.width / 2) / rect.width) * 7

    setSpotlight({ x, y, active: true })
    setHeroTilt({ x: tiltX, y: tiltY })
  }

  const resetHeroInteraction = () => {
    setSpotlight((current) => ({ ...current, active: false }))
    setHeroTilt({ x: 0, y: 0 })
  }

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
        <section
          onPointerMove={handleHeroPointerMove}
          onPointerLeave={resetHeroInteraction}
          className="relative flex min-h-dvh items-center border-b border-white/60 bg-[radial-gradient(circle_at_top_left,rgba(239,217,209,0.75),transparent_32rem),linear-gradient(180deg,#f4eeed_0%,#fffafa_100%)] px-5 pb-16 pt-32 sm:px-8 lg:pt-36"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block"
            animate={{ opacity: spotlight.active ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(221, 183, 171, 0.32), transparent 22rem)`,
            }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] top-[24%] hidden h-3 w-3 rounded-full bg-olive/45 shadow-[0_0_30px_rgba(153,155,132,0.5)] lg:block"
            animate={shouldReduceMotion ? undefined : { y: [0, -18, 0], opacity: [0.35, 0.9, 0.35], scale: [1, 1.25, 1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[20%] left-[42%] hidden h-2.5 w-2.5 rounded-full bg-blush/70 shadow-[0_0_26px_rgba(221,183,171,0.55)] lg:block"
            animate={shouldReduceMotion ? undefined : { y: [0, 16, 0], x: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          />
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
                <motion.span
                  animate={shouldReduceMotion ? undefined : { rotate: [0, 12, -8, 0], scale: [1, 1.14, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex"
                >
                  <Sparkles size={16} />
                </motion.span>
                CoreSoul Wellness & Fitness
              </div>
              <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-ink sm:text-7xl lg:text-8xl">
                Build strength. Create balance. Thrive fully.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
                Whether you are starting with at-home workouts or building confidence in the gym, Becky has got you every
                step of the way.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href="#cta"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 font-bold text-white shadow-soft transition hover:bg-olive-dark"
                >
                  Start Your Journey
                  <ArrowRight className="transition group-hover:translate-x-1" size={19} />
                </motion.a>
                <motion.a
                  href="#coaching"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-olive/25 bg-white/60 px-7 py-4 font-bold text-ink transition hover:border-olive hover:bg-white"
                >
                  Explore Coaching
                </motion.a>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 text-sm font-semibold text-ink/70 sm:grid-cols-3">
                {['At-home workouts', 'Gym confidence', 'Mind-body support'].map((item) => (
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
              whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
              style={{
                y: heroCardY,
                rotate: heroCardRotate,
                rotateX: shouldReduceMotion ? 0 : heroTilt.x,
                rotateY: shouldReduceMotion ? 0 : heroTilt.y,
                transformPerspective: 900,
              }}
              className="relative"
            >
              <motion.div
                className="rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-card backdrop-blur"
                animate={shouldReduceMotion ? undefined : { boxShadow: ['0 28px 90px rgba(2, 4, 3, 0.14)', '0 34px 105px rgba(128, 130, 106, 0.22)', '0 28px 90px rgba(2, 4, 3, 0.14)'] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative overflow-hidden rounded-[1.55rem] bg-ink p-5 text-soft sm:p-7">
                  <motion.div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blush via-blush-light to-olive"
                    animate={shouldReduceMotion ? undefined : { opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative grid min-h-56 place-items-center rounded-[1.25rem] border border-white/12 bg-white p-5 shadow-soft sm:min-h-72 sm:p-7">
                    <motion.img
                      src="/brand/core-soul-logo.png"
                      alt="Core Soul Wellness and Fitness brand mark"
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="h-full max-h-60 w-full object-contain sm:max-h-72"
                    />
                  </div>
                  <div className="relative mt-5 rounded-[1.35rem] border border-white/10 bg-white/[0.08] p-5 sm:p-6">
                    <p className="text-center text-sm font-bold uppercase tracking-[0.18em] text-blush-light">Core support</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {['Strength', 'Balance', 'Confidence', 'Healing'].map((item) => (
                        <motion.div
                          key={item}
                          whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                          className="flex min-h-14 items-center gap-3 rounded-2xl bg-white/[0.06] px-3"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blush text-ink">
                            <Check size={17} />
                          </span>
                          <p className="font-serif text-xl text-white sm:text-2xl">{item}</p>
                        </motion.div>
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
              </motion.div>
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
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-olive-dark">Certified trainer and holistic practitioner</p>
                  <p className="mt-5 leading-7 text-ink/68">
                    Fitness coaching, EFT Tapping, Core Clearing, Reiki, and social service experience brought together with care.
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
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">Meet Becky</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Certified support rooted in lived transformation.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                Becky is a certified personal trainer through the International Sports Sciences Association, an EFT and
                Core Clearing Work Practitioner, Reiki Master, and holds a diploma in Social Service Work.
              </p>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                After overcoming drug addiction, losing over 110 lbs, and reversing Type 2 Diabetes through proper
                nutrition, movement, and sustainable lifestyle changes, Becky is passionate about helping other women
                create lasting transformation in both body and mind.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['ISSA certified personal trainer', 'EFT and Core Clearing Practitioner', 'Reiki Master', 'Social Service Work diploma'].map((item) => (
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
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">A Holistic Approach</p>
                <h2 id="proof-heading" className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                  Fitness coaching, EFT Tapping, and Core Clearing in one personalized path.
                </h2>
                <p className="mt-5 text-base leading-8 text-ink/70 sm:text-lg">
                  Your journey is unique, and so is Becky's approach. Every session is personalized to meet your specific
                  needs, helping you create meaningful, lasting change from the inside out.
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
              eyebrow="A Holistic Approach"
              title="Personalized support for body, mind, and emotional balance."
              text="Becky's approach combines fitness coaching, EFT Tapping, and Core Clearing techniques to help you restore balance and confidence."
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
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -10,
                            scale: 1.02,
                            rotate: index % 2 === 0 ? -0.6 : 0.6,
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/62 p-7 shadow-soft transition hover:bg-white hover:shadow-card"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 scale-75 rounded-full bg-blush-light/55 opacity-0 blur-2xl transition duration-300 group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <motion.div
                        whileHover={shouldReduceMotion ? undefined : { rotate: [0, -8, 8, 0], scale: 1.08 }}
                        transition={{ duration: 0.45 }}
                        className="relative grid h-14 w-14 place-items-center rounded-2xl bg-blush-light text-olive-dark transition group-hover:bg-olive group-hover:text-white"
                      >
                        <Icon size={25} />
                      </motion.div>
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

        <section id="eft" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-ink px-5 py-16 text-soft shadow-card sm:px-10 lg:px-14">
            <SectionHeader
              eyebrow="Emotional Freedom Technique (EFT) Tapping"
              title="Release emotional blocks, reduce stress, and support healing from within."
              text="EFT Tapping is a powerful mind-body technique that helps address unresolved emotions, limiting beliefs, emotional eating patterns, and negative thought cycles."
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
                  whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 transition hover:border-blush-light/35 hover:bg-white/[0.1]"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <motion.span
                      whileHover={shouldReduceMotion ? undefined : { rotate: 8 }}
                      className="inline-grid h-12 w-12 place-items-center rounded-full bg-blush text-ink font-bold"
                    >
                      {index + 1}
                    </motion.span>
                    <Timer className="text-blush-light/70" size={22} />
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 leading-7 text-soft/72">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="core-clearing" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">Core Clearing</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Address deep-rooted beliefs and emotional blocks at the root.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                Core Clearing Sessions combine Meridian-Point Tapping, Neuro-Linguistic Programming (NLP), and intuitive
                Kinesiology to help identify and release subconscious patterns connected to past trauma, fear-based
                experiences, limiting beliefs, and emotional conditioning.
              </p>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                This holistic approach helps you move beyond old programming and reconnect with your authentic self,
                allowing you to create lasting transformation from the inside out.
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
                  whileHover={shouldReduceMotion ? undefined : { x: 6, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex items-center gap-4 rounded-3xl bg-white/65 p-5 shadow-soft transition hover:bg-white"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-olive text-white transition group-hover:bg-ink">
                    <Check size={18} />
                  </span>
                  <p className="font-semibold text-ink/78">{reason}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="EFT Can Support"
              title="A practical tool for stress, cravings, confidence, and emotional healing."
              text="By gently tapping on specific meridian points on the body, EFT helps calm the nervous system, restore energetic balance, and create healthier emotional responses."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                'Releasing emotional stress and overwhelm',
                'Healing unresolved childhood experiences',
                'Shifting limiting beliefs and self-sabotaging patterns',
                'Reducing anxiety and emotional reactivity',
                'Helping manage cravings and emotional eating',
                'Building confidence, self-awareness, and resilience',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  variants={floatIn}
                  whileHover={shouldReduceMotion ? undefined : { y: -8, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[2rem] bg-white/70 p-7 shadow-soft transition hover:bg-white hover:shadow-card"
                >
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-blush-light text-olive-dark">
                    <Check size={22} />
                  </div>
                  <p className="font-serif text-2xl font-semibold leading-tight text-ink">{item}</p>
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
              <motion.div
                animate={shouldReduceMotion ? undefined : { rotate: [0, -6, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-6 w-fit text-blush-light"
              >
                <Leaf size={34} />
              </motion.div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-blush-light">Free Consultation</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Ready to create meaningful, lasting change?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-soft/78">
                Start with a no-pressure clarity call. You will talk through where you are, what feels hard, and the kind
                of fitness, EFT, or Core Clearing support that can help you move forward.
              </p>
              <motion.a
                href="mailto:hello@coresoulwellness.com"
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-soft px-8 py-4 font-bold text-ink transition hover:bg-blush-light"
              >
                Book a Free Consultation
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </motion.a>
            </div>
            <div className="bg-white px-6 py-10 text-ink sm:px-10 lg:px-12 lg:py-16">
              <div className="mb-8 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blush-light text-olive-dark">
                  <Mail size={23} />
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold">What happens next</p>
                  <p className="mt-1 text-sm font-semibold text-ink/58">Personalized support from the first conversation.</p>
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
                      whileHover={shouldReduceMotion ? undefined : { x: 7, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.48, delay: index * 0.07 }}
                      className="group flex gap-4 rounded-2xl border border-olive/12 bg-soft/70 p-5 transition hover:border-olive/25 hover:bg-soft"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-olive text-white transition group-hover:bg-ink">
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
              Build strength. Create balance. Thrive fully with fitness, EFT Tapping, and Core Clearing support.
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
