import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { TextRotate } from '@/components/ui/text-rotate'
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
  X,
} from 'lucide-react'
import { useState, type PointerEvent } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Transformation', href: '#transformation' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Strong & Sober', href: '#strong-and-sober' },
  { label: 'Packages', href: '#packages' },
  { label: 'EFT Tapping', href: '#eft' },
  { label: 'Core Clearing', href: '#core-clearing' },
]

const services = [
  {
    title: 'Fitness Coaching',
    icon: HeartPulse,
    text: 'Personalized movement, strength work, nutrition support, and sustainable habits designed around your body, goals, energy, and lifestyle.',
    highlight: 'Body',
  },
  {
    title: 'Mindset Work',
    icon: ShieldCheck,
    text: 'Support for confidence, self-trust, healthier thought patterns, emotional eating, and the mindset shifts that make change last.',
    highlight: 'Mind',
  },
  {
    title: 'Emotional Healing',
    icon: Sparkles,
    text: 'EFT Tapping and Core Clearing support to help release unresolved emotions, limiting beliefs, negative thought cycles, and old programming.',
    highlight: 'Emotions',
  },
  {
    title: 'Nervous System Support',
    icon: Dumbbell,
    text: 'Grounding tools and self-regulation practices to help reduce overwhelm, restore balance, and build calmer responses in daily life.',
    highlight: 'Balance',
  },
]

const coachingPackages = [
  {
    packageName: 'Package 1',
    title: 'Core Strength Foundations',
    subtitle: 'Build Strength, Confidence & Healthy Habits',
    description:
      'A supportive fitness coaching experience designed to help women feel stronger, healthier, and more confident through sustainable movement, nourishment, and lifestyle habits.',
    bestFor: 'Women wanting structure, consistency, fitness support, and healthier habits.',
    options: ['6-Week Program', '12-Week Program', '6-Month Program - includes a complimentary add-on of your choice'],
    includes: [
      'Personalized workout program',
      '1:1 personal training sessions',
      'Nutrition & macro support',
      'Meal planning guidance',
      'Weekly check-ins',
      'Accountability coaching',
      'Habit-building support',
      "Access to women's support community WhatsApp group",
    ],
  },
  {
    packageName: 'Package 2',
    title: 'Soul Alignment Wellness Coaching',
    subtitle: 'Reconnect, Reset & Feel Like Yourself Again',
    description:
      'A holistic wellness coaching experience focused on emotional well-being, mindset, nourishment, and creating a more balanced, aligned lifestyle.',
    bestFor: 'Women feeling overwhelmed, stuck, burnt out, or disconnected from themselves.',
    options: ['6-Week Program', '12-Week Program', '6-Month Program - includes one complimentary add-on session of your choice'],
    includes: [
      'Mindset & lifestyle coaching',
      'Nutrition & wellness guidance',
      'Healthy habit support',
      'EFT Tapping sessions',
      'Core Clearing sessions',
      'Weekly accountability check-ins',
      "Access to women's support community WhatsApp group",
    ],
  },
  {
    packageName: 'Package 3',
    title: 'Elevated Soul Transformation',
    subtitle: 'Mind, Body & Lifestyle Transformation Support',
    description:
      'A complete transformational coaching experience combining fitness, nutrition, mindset, and emotional wellness support to create lasting change from the inside out.',
    bestFor: 'Women ready for deeper transformation, lasting lifestyle change, and high-level support and accountability.',
    options: ['12-Week Program', '6-Month Program - includes one complimentary add-on session of your choice'],
    includes: [
      '1:1 personal training sessions',
      'Personalized workout program',
      'Nutrition & macro guidance',
      'Meal planning & meal prepping support',
      'Weekly check-ins',
      'EFT Tapping sessions',
      'Core Clearing sessions',
      'Mindset & lifestyle coaching',
      'Habit & accountability tracking',
      'Priority messaging support',
      "Access to women's support community WhatsApp group",
    ],
  },
]

const strongAndSoberProgram = {
  headline: 'Build the strength your sobriety already proved you have.',
  description:
    'A 12-week strength, nutrition, and coaching program for women in recovery who want their bodies to feel as strong as the lives they have rebuilt.',
  promise:
    'Build strength, steadier routines, and more pride in your body with a plan designed for life after addiction.',
  container:
    '12 weeks of personalized training, practical nutrition guidance, weekly coaching, and accountable support.',
}

const strongAndSoberSubhead =
  'The fitness and nutrition program to help you become the strong, steady, fully-in-control version of yourself your body has not caught up to yet, without generic fitness plans that were never built for women in recovery, even if you have started and stopped before.'

const strongAndSoberRecognition = [
  'I got my life back and I still do not feel at home in my body.',
  'I used food as a coping mechanism for so long. Now I feel like I am guessing.',
  'Every workout plan seems made for someone who was never falling apart.',
  'Some days I feel capable. Some days I can barely get off the couch.',
  'What if I try again, stop again, and decide that means I am broken?',
]

const strongAndSoberWants = [
  'To look in the mirror and recognize the woman you are now',
  'To trust that your body can do what you ask of it',
  'To eat without turning every choice into a daily battle',
  'To have energy you do not have to fight for',
  'To be admired for your strength, not defined only by what you survived',
]

const strongAndSoberReframe = {
  title: 'The problem is not that you lack discipline.',
  text: 'Most fitness advice was not built around recovery, uneven capacity, or the need to rebuild trust without turning your body into another battleground.',
}

const strongAndSoberOutcome = {
  title: 'Strength you can feel, see, and carry forward.',
  text: 'Capability, self-trust, steadier routines, and visible progress. Muscle is visible, earned strength. It cannot tell your whole recovery story, but it can let the outside finally reflect something true about the woman you fought to become.',
}

const strongAndSoberAuthority =
  'I have lived the full arc myself: addiction, chronic depression and anxiety, Type 2 diabetes, sobriety, and the slower work of rebuilding my health and strength. I lost over 110 pounds, reversed my Type 2 diabetes, and came off the medications I had been taking. I am not a coach who only studied this from the outside. I know what it is to begin again in a body you are still learning to trust. I built this program to give women in recovery the kind of steady whole-person support I needed: progressive movement, practical food guidance, real coaching, and room for the hard days without losing the plan.'

const strongAndSoberPath = [
  {
    step: '01',
    title: 'You recognize yourself',
    text: 'A post, a referral, a conversation, or this page names the moment you are in.',
  },
  {
    step: '02',
    title: 'You understand the offer',
    text: 'One clear page explains who it is for, the 12-week result, the Ground to Build to Own path, two support levels, and the investment.',
  },
  {
    step: '03',
    title: 'You book a consult',
    text: 'A short conversation explores your goals, readiness, relevant health considerations, and which level of support fits.',
  },
  {
    step: '04',
    title: 'You receive a clear recommendation',
    text: 'Becky recommends Foundations, All In, or a different kind of support. No pressure, and no pretending every person is a fit.',
  },
  {
    step: '05',
    title: 'You start with clean boundaries',
    text: 'Agreement, payment, screening, consent, scheduling, cancellation policy, communication boundaries, and onboarding are handled before we begin.',
  },
]

const strongAndSoberPhases = [
  {
    month: 'Month 1',
    title: 'Ground',
    icon: Leaf,
    text: 'Start with the body and life you have now.',
    points: [
      'Assess capacity, habits, and support needs',
      'Set a realistic baseline',
      'Build early consistency without all-or-nothing pressure',
    ],
  },
  {
    month: 'Month 2',
    title: 'Build',
    icon: TrendingUp,
    text: 'Progress strength while coaching what gets in the way.',
    points: ['Follow progressive training', 'Practice food-as-fuel routines', 'Work with resistance and self-sabotage'],
  },
  {
    month: 'Month 3',
    title: 'Own',
    icon: BadgeCheck,
    text: 'Turn support into capability you can carry forward.',
    points: [
      'Notice visible and lived progress',
      'Strengthen independent decision-making',
      'Leave with a sustainable next-phase plan',
    ],
  },
]

const strongAndSoberIncludes = [
  'A starting assessment and personalized movement plan',
  '3 - 4 planned training sessions each week',
  'Video form review for self-led sessions',
  'Practical food-as-fuel education and planning support',
  'One weekly coaching call with Becky',
  'Support for resistance, fear, and all-or-nothing patterns',
  'Clear check-ins and accountable next steps',
  'A personal plan for continuing after week 12',
]

const strongAndSoberTiers = [
  {
    level: 'Option 1',
    title: 'Foundations',
    subtitle: 'Structured. Supported. Self-led.',
    price: '$1,400',
    priceNote: 'for 12 weeks',
    includes: [
      'Personalized weekly workout plan, 3 - 4 sessions each week',
      'Video form checks',
      'Nutrition education and planning support',
      'Weekly coaching call',
      'Accountability and agreed support between calls',
    ],
  },
  {
    level: 'Option 2',
    title: 'All In',
    subtitle: 'Live training. Close support.',
    price: '$2,700',
    priceNote: 'for 12 weeks',
    includes: [
      'Everything in Foundations',
      '2 live 45-minute 1:1 training sessions each week with Becky',
      'Real-time coaching and form support',
      'Closer accountability throughout the program',
      'Clear session and cancellation boundaries',
    ],
  },
]

const paymentOptions = [
  {
    title: 'E-transfer',
    text: 'Pay by e-transfer at no additional cost.',
  },
  {
    title: 'Credit or debit via Stripe',
    text: 'Card payments are processed through Stripe. A processing fee is added to cover the transaction cost.',
  },
  {
    title: 'Payment plans',
    text: 'Payment plans are available for both options. Reach out to arrange a schedule that works for you.',
  },
]

const addOnServices = [
  {
    title: 'EFT Tapping Session',
    detail: '60 min | $115',
    text: 'Restore emotional balance, calm the nervous system, and create empowered mindset shifts through guided EFT tapping.',
  },
  {
    title: 'Small Group Online Personal Training',
    detail: '45 - 60 min | $20 per person',
    text: 'Train together, stay motivated together. Create your own group with friends, family, or coworkers with a minimum of 4 participants.',
  },
  {
    title: 'Core Clearing Session',
    detail: '60 min | $115',
    text: 'Gently release limiting beliefs, emotional blocks, and stored patterns to support deeper healing, clarity, and personal transformation.',
  },
  {
    title: '1:1 Online Personal Training',
    detail: '60 - 75 min | $100',
    text: 'Personalized online training tailored to support your body, goals, energy, and lifestyle.',
  },
]

const featuredTestimonial = {
  name: 'Faiza',
  paragraphs: [
    'Working with Becky has been about so much more than getting stronger physically\u2014it has been about learning to show up for myself.',
    'She is incredibly patient, encouraging, and genuinely attentive to my personal reality. She understands that life can sometimes make it difficult to get to the gym or find the motivation to work out, and she meets me where I am without judgment but also will not tolerate excuses, and that makes this balance beautiful. Whether we are training together over FaceTime at the gym or on Zoom, she is fully present\u2014guiding me through each movement, helping me understand the why behind what we are doing, and making sure I am progressing safely and intentionally through progressive overload. I have seen my body transform over the weeks and months.',
    'What makes her approach truly special is the soulful and mindful way she coaches. Throughout our workouts, she reminds me of my strength\u2014not just physical strength, but mental and emotional strength too. She has helped me recognize that sometimes the biggest achievement is simply showing up for myself.',
    'I have become stronger, more confident, and more aware of what my body is capable of, but perhaps most importantly, I have developed a deeper appreciation for the commitment I am making to myself. She is the kind of trainer who sees the whole person, not just the workout in front of her, and that makes all the difference.',
  ],
}

const testimonials = [
  {
    name: 'Vibha Mistry',
    location: 'Pickering, Ontario',
    text: "Becky is an amazing coach who is incredibly encouraging, supportive, and motivating. She takes the time to explain everything clearly, pushes you to challenge yourself, and always makes you feel like you can accomplish more than you thought you could. I\u2019m so grateful for her positive energy and support!",
  },
  {
    name: 'Katie Bailie',
    location: 'Clarington, Ontario',
    text: 'Becky has been nothing short of amazing as a coach! Her energy gets me pumped up for our morning workouts! She is easy to follow, and though the workouts are challenging, she makes it fun! Who knew working out was fun! Thanks Becky for pouring your passion for helping others into your role as Coach!',
  },
]

const fitList = [
  'You feel disconnected from yourself',
  'You struggle with confidence, emotional eating, or self-sabotaging patterns',
  "You are tired of quick fixes and constantly starting over",
  'You want support that nurtures both your mind and body',
  'You are ready to create sustainable change from the inside out',
]

const method = [
  {
    title: 'Release',
    text: 'Use tapping to help release emotional stress, overwhelm, and unresolved experiences held in the body.',
    symbol: '/brand/eft-release-symbol.jpeg',
  },
  {
    title: 'Reprogram',
    text: 'Create new neural pathways so unhelpful patterns can shift into calmer, healthier responses.',
    symbol: '/brand/eft-reprogram-symbol.jpeg',
  },
  {
    title: 'Regulate',
    text: 'Build a lifelong self-regulation tool for emotions, cravings, clarity, grounding, and personal growth.',
    symbol: '/brand/eft-regulate-symbol.png',
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

const transformationPhotos = [
  {
    year: '2023',
    image: '/transformations/becky-transformation-2023-portrait.jpeg',
    alt: 'Becky before her transformation in 2023',
  },
  {
    year: '2026',
    image: '/transformations/becky-transformation-2026-portrait.jpeg',
    alt: 'Becky after her transformation in 2026',
  },
]

const callSteps = [
  { icon: MessageCircle, title: 'Talk through goals', text: 'Share where you are, what has felt hard, and what you want to change.' },
  { icon: ClipboardCheck, title: 'Personalize support', text: 'Explore the fitness, EFT, or Core Clearing approach that fits your specific needs.' },
  { icon: CalendarCheck, title: 'Create lasting change', text: 'Move forward with a session plan designed to support transformation from the inside out.' },
]

const storyParagraphs = [
  'My name is Becky Little. Beyond my certifications, my greatest qualification is the life I have lived.',
  'I know what it feels like to lose yourself, to feel disconnected from your body, your confidence, your worth, and your identity. I know what it feels like to carry emotional pain while simply trying to survive day by day.',
  'Born in the UK and raised in Canada from the age of 11, I often felt misunderstood growing up and struggled deeply with my sense of self-worth and belonging. As a teenager, I experienced toxic and abusive relationships and carried emotional pain that I did not yet know how to heal from.',
  'I became a mother at a young age and, while raising my two sons, faced some of the darkest moments of my life. I battled severe depression, anxiety, borderline personality disorder, addiction, and deep emotional trauma. For many years, I turned to drugs and alcohol to numb the pain I was carrying inside.',
  'Over time, my addiction led to serious mental and physical health challenges, including psychosis, diabetes, obesity, and complete loss of confidence and identity. By 2020, I reached a breaking point. And that breaking point became the beginning of my transformation.',
  'In August 2020, I made the life-changing decision to reclaim my life and begin my healing journey. Sobriety was the first step, but I soon realized true healing meant addressing the root causes of my pain emotionally, mentally, physically, and spiritually.',
  'In 2022, I discovered healing modalities that transformed my life from the inside out. Through nervous system healing, emotional release work, mindset transformation, spiritual healing, and deep inner work, I learned how to reconnect with myself in ways I never thought possible.',
  'In 2023, my physical health and fitness journey began when I joined a health and fitness group where I connected with other inspirational women, participated in online community workouts, and received nutrition guidance and support.',
  'In 2025, I decided to invest further in myself by hiring a transformational coach and joining another health and fitness program. This allowed me to expand my knowledge, grow personally, and move to a higher level of self-discovery.',
  'Today, I am medication-free, have reversed my type 2 diabetes, lost over 110 pounds, regained my confidence, and created a life rooted in strength, self-love, purpose, and authenticity.',
  "My passion for health, wellness, fitness, and healing continues to grow through supportive women's fitness communities and transformational coaching programs that helped me build strength, confidence, discipline, and self-love from the inside out.",
  'Now, it is my mission to help other women who feel lost, stuck, overwhelmed, or disconnected from themselves. I know what it feels like to struggle, but I also know that healing and transformation are possible with the right support, guidance, and willingness to grow.',
  'That is why I created Core Soul Wellness & Fitness for women: to provide a safe, supportive, accessible, and empowering space for others to heal, grow, and become the healthiest and most confident version of themselves.',
  'If my story resonates with you, I would be honored to support you on your healing, wellness, and fitness journey.',
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

function Logo({ compact = false, href = '#home' }: { compact?: boolean; href?: string }) {
  return (
    <a href={href} className="flex items-center" aria-label="Core Soul Wellness and Fitness home">
      <img
        src="/brand/core-soul-logo-doc.jpeg"
        alt="Core Soul Wellness and Fitness logo"
        className={compact ? 'h-14 w-48 object-contain object-left' : 'h-24 w-72 object-contain object-left'}
      />
    </a>
  )
}

function StoryPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-soft text-ink">
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-bold focus:text-soft"
      >
        Skip to main content
      </a>
      <header className="sticky inset-x-0 top-0 z-50 border-b border-white/60 bg-soft/90 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Logo compact href="/" />
          <div className="flex items-center gap-3">
            <a
              href="/#about"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-olive/25 bg-white/60 px-5 py-3 text-sm font-bold text-ink transition hover:border-olive hover:bg-white"
            >
              Back to Home
            </a>
            <a
              href="mailto:hello@coresoulwellness.com"
              className="hidden min-h-11 items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-bold text-soft transition hover:bg-olive-dark sm:inline-flex"
            >
              Book a Call
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="px-5 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-card">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2">
                  {[
                    { year: '2026', label: 'Now', image: '/transformations/becky-story-2026.jpeg' },
                    { year: '2020', label: 'Beginning', image: '/transformations/becky-story-2020.jpeg' },
                  ].map((photo) => (
                    <figure key={photo.year} className="overflow-hidden rounded-[1rem] bg-soft sm:rounded-[1.55rem]">
                      <div className="aspect-[4/5] overflow-hidden bg-ink">
                        <img
                          src={photo.image}
                          alt={`Becky Little in ${photo.year}`}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <figcaption className="p-3 text-center sm:p-4">
                        <p className="font-serif text-2xl font-semibold text-olive-dark sm:text-3xl">{photo.year}</p>
                        <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink/55 sm:text-xs sm:tracking-[0.18em]">
                          {photo.label}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </motion.aside>

            <motion.article
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.65, delay: 0.08 }}
              className="rounded-[2rem] border border-white/70 bg-white/62 p-6 shadow-soft sm:p-9 lg:p-12"
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">Becky's Story</p>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-6xl">
                A real journey of healing, strength, and coming back to herself.
              </h1>
              <div className="mt-8 grid gap-5 text-lg leading-8 text-ink/72">
                {storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href="mailto:hello@coresoulwellness.com"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 text-center font-bold text-white shadow-soft transition hover:bg-olive-dark sm:w-auto"
                >
                  Book Your Discovery Call
                  <ArrowRight className="transition group-hover:translate-x-1" size={19} />
                </motion.a>
                <motion.a
                  href="/"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-olive/25 bg-soft px-7 py-4 text-center font-bold text-ink transition hover:border-olive hover:bg-white sm:w-auto"
                >
                  Return Home
                </motion.a>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
    </div>
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
      <h2 className={`font-serif text-3xl font-semibold leading-tight sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
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

  if (window.location.pathname === '/story') {
    return <StoryPage />
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
                Core Soul Wellness & Fitness
              </div>
              <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl xl:text-8xl">
                Build{' '}
                <TextRotate
                  texts={['strength', 'balance', 'confidence', 'resilience']}
                  rotationInterval={2600}
                  staggerDuration={0.018}
                  staggerFrom="last"
                  mainClassName="inline-flex align-baseline text-olive-dark"
                  splitLevelClassName="inline-flex"
                  elementLevelClassName="inline-block"
                  transition={{ type: 'spring', damping: 28, stiffness: 360 }}
                />. Create balance. Thrive fully.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
                Whether you are starting with at-home workouts, building confidence in the gym, or working through
                emotional blocks that have been holding you back, Becky is here to guide and support you every step of
                the way.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href="#cta"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 text-center font-bold text-white shadow-soft transition hover:bg-olive-dark sm:w-auto"
                >
                  Start Your Wellness Journey
                  <ArrowRight className="transition group-hover:translate-x-1" size={19} />
                </motion.a>
                <motion.a
                  href="#coaching"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-olive/25 bg-white/60 px-7 py-4 text-center font-bold text-ink transition hover:border-olive hover:bg-white sm:w-auto"
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
                      src="/brand/core-soul-logo-doc.jpeg"
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
              <div className="overflow-hidden rounded-[1.55rem] border border-white/15 bg-soft/95">
                <div className="aspect-[4/5] overflow-hidden bg-ink">
                  <img
                    src="/transformations/becky-about-doc.jpeg"
                    alt="Becky in 2026 after her transformation"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="font-serif text-3xl font-semibold text-ink">Becky</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-olive-dark">Certified personal trainer and holistic practitioner</p>
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
              <h2 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                The heart behind Core Soul Wellness & Fitness.
              </h2>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-olive-dark">
                Certified personal trainer and holistic practitioner
              </p>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                Becky is a Certified Personal Trainer through the International Sports Sciences Association, an EFT and
                Core Clearing Work Practitioner, Reiki Master, and holds a diploma in Social Service Work.
              </p>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                After overcoming drug addiction, losing over 110 lbs, and reversing Type 2 Diabetes through nutrition,
                movement, and sustainable lifestyle changes, Becky discovered her passion for helping other women
                transform their lives from the inside out.
              </p>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                More than certifications, Becky's greatest qualification is the life she has lived and the transformation
                she created through healing, resilience, and personal growth.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['ISSA certified personal trainer', 'EFT and Core Clearing Practitioner', 'Reiki Master', 'Social Service Work diploma'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/60 p-4">
                    <BadgeCheck className="shrink-0 text-olive-dark" size={20} />
                    <span className="font-semibold text-ink/78">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href="/story"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 text-center font-bold text-white shadow-soft transition hover:bg-olive-dark sm:w-auto"
                >
                  Read Becky's Story
                  <ArrowRight className="transition group-hover:translate-x-1" size={19} />
                </motion.a>
                <motion.a
                  href="#cta"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-olive/25 bg-white/60 px-7 py-4 text-center font-bold text-ink transition hover:border-olive hover:bg-white sm:w-auto"
                >
                  Book a Call
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 lg:py-20" aria-labelledby="proof-heading">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/70 bg-white/55 p-5 shadow-soft sm:rounded-[2.5rem] sm:p-8 lg:p-10">
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
                  Personalized support for your body, mind, and emotional well-being.
                </h2>
                <p className="mt-5 text-base leading-8 text-ink/70 sm:text-lg">
                  You do not have to navigate this journey alone. If you have been feeling disconnected from yourself,
                  stuck in unhealthy patterns, emotionally overwhelmed, exhausted, or unsure where to begin, you are not
                  alone.
                </p>
                <p className="mt-4 text-base leading-8 text-ink/70 sm:text-lg">
                  At Core Soul Wellness & Fitness, we help women reconnect with themselves and create lasting
                  transformation from the inside out through fitness coaching, mindset work, emotional healing, and
                  nervous system support.
                </p>
                <motion.a
                  href="#cta"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 text-center font-bold text-white shadow-soft transition hover:bg-olive-dark sm:w-auto"
                >
                  Begin Your Transformation
                  <ArrowRight className="transition group-hover:translate-x-1" size={19} />
                </motion.a>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="rounded-[2rem] bg-soft p-6 shadow-soft"
              >
                <p className="font-serif text-3xl font-semibold leading-tight text-ink">
                  This is not about quick fixes or extreme routines.
                </p>
                <p className="mt-5 text-base leading-8 text-ink/70 sm:text-lg">
                  It is about creating sustainable habits, emotional freedom, inner strength, and a healthier, more
                  aligned version of yourself. True healing happens when the mind and body work together.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="transformation" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Becky's Transformation"
              title="A real journey of strength, healing, and lasting change."
              text="Through fitness, mindset work, emotional healing, and personal growth, Becky transformed her life from the inside out. Today, she helps women create sustainable change, rebuild confidence, and reconnect with the strongest version of themselves."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="mx-auto mt-10 max-w-4xl sm:mt-14"
            >
              <motion.figure
                variants={floatIn}
                whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
                transition={{ duration: 0.55 }}
                className="group overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/70 p-2 shadow-soft transition hover:bg-white hover:shadow-card sm:rounded-[2rem] sm:p-3"
              >
                <div className="grid grid-cols-2 gap-2 rounded-[1.1rem] bg-soft p-2 sm:gap-3 sm:rounded-[1.55rem] sm:p-3">
                  {transformationPhotos.map((photo) => (
                    <div key={photo.year} className="overflow-hidden rounded-[0.9rem] bg-ink sm:rounded-[1.2rem]">
                      <div className="relative">
                        <img
                          src={photo.image}
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                          className="block h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                        />
                        <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-ink shadow-soft sm:bottom-3 sm:left-3 sm:px-3 sm:text-sm">
                          {photo.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-2 py-3 sm:py-4">
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.2em] text-olive-dark">Transformation</span>
                      <span className="mt-1 block font-serif text-2xl font-semibold text-ink">2023 to 2026</span>
                    </span>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blush-light text-olive-dark">
                      <TrendingUp size={20} />
                    </span>
                </figcaption>
              </motion.figure>
            </motion.div>
            <div className="mt-10 flex justify-center">
              <motion.a
                href="#cta"
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 text-center font-bold text-white shadow-soft transition hover:bg-olive-dark sm:w-auto"
              >
                Start Your Wellness Journey
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </motion.a>
            </div>
          </div>
        </section>

        <section id="coaching" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="A Holistic Approach"
              title="Personalized support for body, mind, and emotional balance."
              text="Healing and strength can exist together. Becky offers a supportive and empowering space for women who are ready to create sustainable lifestyle change."
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
            <div className="mt-10 flex justify-center">
              <motion.a
                href="#cta"
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-center font-bold text-soft shadow-soft transition hover:bg-olive-dark sm:w-auto"
              >
                Work with Becky
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </motion.a>
            </div>
          </div>
        </section>

        <section id="eft" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-ink px-5 py-14 text-soft shadow-card sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-14">
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
                      className="inline-grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-white p-2 text-ink"
                    >
                      <img src={step.symbol} alt="" aria-hidden="true" className="h-full w-full object-contain" />
                    </motion.span>
                    <Timer className="text-blush-light/70" size={22} />
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 leading-7 text-soft/72">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-10 flex justify-center">
              <motion.a
                href="#cta"
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-soft px-7 py-4 text-center font-bold text-ink shadow-soft transition hover:bg-blush-light sm:w-auto"
              >
                Work with Becky
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </motion.a>
            </div>
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
              <h2 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                Release limiting beliefs and reconnect with your authentic self.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                Core Clearing Sessions are designed to help identify and release subconscious patterns connected to past
                trauma, fear-based experiences, emotional conditioning, and limiting beliefs.
              </p>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                Using a unique combination of Meridian-Point Tapping, Neuro-Linguistic Programming (NLP), and Intuitive
                Kinesiology, Becky helps women move beyond old programming and create meaningful, lasting change from
                within.
              </p>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                This gentle yet powerful process helps you reconnect with yourself, shift your mindset, and move forward
                with greater clarity, confidence, and emotional freedom.
              </p>
              <motion.a
                href="#cta"
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 text-center font-bold text-white shadow-soft transition hover:bg-olive-dark sm:w-auto"
              >
                You Don't Have To Do This Alone
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </motion.a>
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

        <section className="px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/70 bg-white/55 p-6 shadow-soft sm:rounded-[2.5rem] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">More Than Fitness</p>
                <h2 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                  A journey back to yourself.
                </h2>
              </div>
              <div className="grid gap-4 text-lg leading-8 text-ink/72">
                <p>
                  Healing and strength can exist together. This journey is about more than fitness. It is about becoming
                  the strongest, most aligned version of yourself.
                </p>
                <p>
                  Becky offers a supportive and empowering space for women who are ready to create sustainable lifestyle
                  change.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="strong-and-sober" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Strong & Sober"
              title={strongAndSoberProgram.headline}
              text={strongAndSoberProgram.description}
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="mx-auto mt-6 max-w-3xl text-center leading-7 text-ink/68"
            >
              {strongAndSoberSubhead}
            </motion.p>

            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-14 grid gap-5 lg:grid-cols-2"
            >
              <motion.div
                variants={floatIn}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">If this sounds like you</p>
                <div className="mt-5 grid gap-4">
                  {strongAndSoberRecognition.map((quote) => (
                    <p key={quote} className="border-l-2 border-blush-light pl-4 leading-7 text-ink/72 italic">
                      &ldquo;{quote}&rdquo;
                    </p>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={floatIn}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">What you want instead</p>
                <div className="mt-5 grid gap-3">
                  {strongAndSoberWants.map((want) => (
                    <div key={want} className="flex gap-3 leading-7 text-ink/70">
                      <Check className="mt-1 shrink-0 text-olive-dark" size={18} />
                      <span>{want}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="mt-5 rounded-[2rem] border border-white/70 bg-soft p-7 lg:p-10"
            >
              <h3 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                {strongAndSoberReframe.title}
              </h3>
              <p className="mt-4 max-w-3xl leading-7 text-ink/68">{strongAndSoberReframe.text}</p>
            </motion.div>

            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-14 grid gap-5 lg:grid-cols-2"
            >
              <motion.div
                variants={floatIn}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive-dark">The promise</p>
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug text-ink">{strongAndSoberProgram.promise}</p>
              </motion.div>
              <motion.div
                variants={floatIn}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive-dark">The container</p>
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug text-ink">{strongAndSoberProgram.container}</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-5 grid gap-5 lg:grid-cols-3"
            >
              {strongAndSoberPhases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <motion.article
                    key={phase.title}
                    variants={floatIn}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="flex flex-col rounded-[2rem] border border-white/70 bg-soft p-7"
                  >
                    <div className="flex items-center gap-3 text-olive-dark">
                      <Icon size={22} />
                      <p className="text-xs font-bold uppercase tracking-[0.2em]">{phase.month}</p>
                    </div>
                    <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">{phase.title}</h3>
                    <p className="mt-3 leading-7 text-ink/68">{phase.text}</p>
                    <div className="mt-5 grid gap-2">
                      {phase.points.map((point) => (
                        <div key={point} className="flex gap-3 text-sm leading-6 text-ink/70">
                          <Check className="mt-0.5 shrink-0 text-olive-dark" size={17} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>

            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-5 rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">What every client receives</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {strongAndSoberIncludes.map((include, index) => (
                  <motion.div
                    key={include}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className="flex gap-3 text-sm leading-6 text-ink/70"
                  >
                    <Check className="mt-0.5 shrink-0 text-olive-dark" size={17} />
                    <span>{include}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-5 grid gap-5 lg:grid-cols-2"
            >
              {strongAndSoberTiers.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={floatIn}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="flex flex-col rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive-dark">{item.level}</p>
                  <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">{item.title}</h3>
                  <p className="mt-3 font-bold text-ink/72">{item.subtitle}</p>
                  <div className="mt-5 flex items-baseline gap-3">
                    <p className="font-serif text-4xl font-semibold text-ink">{item.price}</p>
                    <p className="text-sm font-bold text-ink/60">{item.priceNote}</p>
                  </div>
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">Includes</p>
                    <div className="grid gap-2">
                      {item.includes.map((include) => (
                        <div key={include} className="flex gap-3 text-sm leading-6 text-ink/70">
                          <Check className="mt-0.5 shrink-0 text-olive-dark" size={17} />
                          <span>{include}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="mt-5 rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft lg:p-10"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">The outcome</p>
              <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                {strongAndSoberOutcome.title}
              </h3>
              <p className="mt-4 max-w-3xl leading-7 text-ink/68">{strongAndSoberOutcome.text}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="mt-5 rounded-[2rem] border border-white/70 bg-soft p-7 lg:p-10"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">Why Becky built this</p>
              <p className="mt-4 max-w-4xl font-serif text-xl leading-8 text-ink/78 sm:text-2xl sm:leading-9">
                &ldquo;{strongAndSoberAuthority}&rdquo;
              </p>
            </motion.div>

            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-5 rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">How it works</p>
              <div className="mt-6 grid gap-5 lg:grid-cols-5">
                {strongAndSoberPath.map((item, index) => (
                  <motion.div key={item.step} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.07 }}>
                    <p className="font-serif text-3xl font-semibold text-olive-dark/70">{item.step}</p>
                    <p className="mt-2 text-base font-bold text-ink">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-ink/68">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-5 rounded-[2rem] border border-white/70 bg-soft p-7"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">Payment options</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                {paymentOptions.map((option, index) => (
                  <motion.div key={option.title} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }}>
                    <p className="text-base font-bold text-ink">{option.title}</p>
                    <p className="mt-2 text-sm leading-6 text-ink/68">{option.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="packages" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Services & Coaching Packages"
              title="Choose the support that fits where you are."
              text="Each package is delivered online or virtually, with personalized coaching and access to a women's support community WhatsApp group."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-14 grid gap-5 lg:grid-cols-3"
            >
              {coachingPackages.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={floatIn}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="flex flex-col rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive-dark">{item.packageName}</p>
                  <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">{item.title}</h3>
                  <p className="mt-3 font-bold text-ink/72">{item.subtitle}</p>
                  <p className="mt-5 leading-7 text-ink/68">{item.description}</p>
                  <div className="mt-6 rounded-2xl bg-soft p-4">
                    <p className="text-sm font-bold text-ink">Best for:</p>
                    <p className="mt-2 text-sm leading-6 text-ink/68">{item.bestFor}</p>
                  </div>
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">Includes</p>
                    <div className="grid gap-2">
                      {item.includes.map((include) => (
                        <div key={include} className="flex gap-3 text-sm leading-6 text-ink/70">
                          <Check className="mt-0.5 shrink-0 text-olive-dark" size={17} />
                          <span>{include}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-olive-dark">Program Options</p>
                    <div className="grid gap-2">
                      {item.options.map((option) => (
                        <span key={option} className="rounded-full bg-blush-light px-4 py-2 text-sm font-bold text-ink/76">
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Add-On Services & Single Sessions"
              title="Focused support when you need one session or extra care."
              text="Book a single session or add targeted support to your coaching package."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-14 grid gap-5 md:grid-cols-2"
            >
              {addOnServices.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={floatIn}
                  whileHover={shouldReduceMotion ? undefined : { y: -8, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[2rem] bg-white/70 p-7 shadow-soft transition hover:bg-white hover:shadow-card"
                >
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-blush-light text-olive-dark">
                    <Check size={22} />
                  </div>
                  <h3 className="font-serif text-3xl font-semibold leading-tight text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-olive-dark">{item.detail}</p>
                  <p className="mt-4 leading-7 text-ink/68">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-10 flex justify-center">
              <motion.a
                href="#cta"
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 text-center font-bold text-white shadow-soft transition hover:bg-olive-dark sm:w-auto"
              >
                Let's Connect - Book Your Call
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </motion.a>
            </div>
          </div>
        </section>

        <section id="testimonials" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Client Words"
              title="What it is like to be coached by Becky."
              text="In their own words, from women she trains."
            />

            <motion.figure
              variants={floatIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              className="mt-14 rounded-[2rem] border border-white/70 bg-white/68 p-7 shadow-soft lg:p-10"
            >
              <Star className="text-olive-dark" size={26} />
              <blockquote className="mt-5 grid gap-5">
                {featuredTestimonial.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className={
                      index === 0
                        ? 'font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl'
                        : 'leading-7 text-ink/70'
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </blockquote>
              <figcaption className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-olive-dark">
                {featuredTestimonial.name}
              </figcaption>
            </motion.figure>

            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-5 grid gap-5 lg:grid-cols-2"
            >
              {testimonials.map((item, index) => (
                <motion.figure
                  key={item.name}
                  variants={floatIn}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="flex flex-col rounded-[2rem] border border-white/70 bg-soft p-7"
                >
                  <Star className="text-olive-dark" size={22} />
                  <blockquote className="mt-4 leading-7 text-ink/72">{item.text}</blockquote>
                  <figcaption className="mt-6">
                    <p className="text-base font-bold text-ink">{item.name}</p>
                    <p className="mt-1 text-sm text-ink/60">{item.location}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-olive-dark">You Deserve This</p>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                You deserve to feel strong, confident, and aligned.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                It is about creating a lifestyle that supports your well-being, builds confidence, and helps you become
                the strongest, healthiest, and most aligned version of yourself.
              </p>
              <motion.a
                href="#cta"
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-center font-bold text-soft shadow-soft transition hover:bg-olive-dark sm:w-auto"
              >
                Let's Create Sustainable Change Together
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </motion.a>
            </motion.div>
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4"
            >
              {fitList.map((item, index) => (
                <motion.div
                  key={item}
                  variants={floatIn}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-3xl bg-white/65 p-5 shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-olive text-white">
                    <Check size={18} />
                  </span>
                  <p className="font-semibold text-ink/78">{item}</p>
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
              <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
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
                className="group mt-9 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-soft px-8 py-4 text-center font-bold text-ink transition hover:bg-blush-light sm:w-auto"
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
