import { ScanLine, ShieldCheck, Salad, Leaf, Trophy, Languages } from "lucide-react";

const items = [
  {
    icon: ScanLine,
    title: "AI Product Scan",
    desc: "Upload 5–10 photos and we detect label info, ingredients, nutrition, and dates via OCR.",
  },
  {
    icon: ShieldCheck,
    title: "Health Score",
    desc: "See a 0–100 score with color coding and explanations for harmful/beneficial additives.",
  },
  {
    icon: Salad,
    title: "Homemade Recipe",
    desc: "Get a healthier homemade alternative with ingredients, steps, time and INR cost breakdown.",
  },
  {
    icon: Leaf,
    title: "Eco Impact",
    desc: "Understand origin, company, and sustainability rating to choose greener options.",
  },
  {
    icon: Trophy,
    title: "Gamified Journey",
    desc: "Earn points, badges, and streaks for better choices and community contributions.",
  },
  {
    icon: Languages,
    title: "Multilingual",
    desc: "Use in English, Hindi, and regional languages for inclusive access.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to trust what you eat</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">From label to life: deep analysis, personal settings, and secure accounts with history and favorites.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 hover:shadow-sm transition-shadow">
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
