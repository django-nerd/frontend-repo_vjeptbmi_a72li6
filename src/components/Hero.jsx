import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-r from-cyan-400/40 via-blue-500/30 to-purple-600/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">
              See through food labels.
            </span>
            <br />
            Make healthier choices.
          </h1>
          <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-prose">
            Upload 5–10 photos of any packaged product and get instant insights: real ingredients, harmful additives, health score, eco impact, and a healthier homemade recipe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:from-blue-500 hover:to-indigo-500">
              Try a demo
            </a>
            <a href="#features" className="inline-flex items-center rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-3 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900">
              Explore features
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
              <dt className="text-xs uppercase tracking-wide text-neutral-500">Users</dt>
              <dd className="text-xl font-semibold">120k+</dd>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
              <dt className="text-xs uppercase tracking-wide text-neutral-500">Scans</dt>
              <dd className="text-xl font-semibold">1.8M</dd>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
              <dt className="text-xs uppercase tracking-wide text-neutral-500">Recipes</dt>
              <dd className="text-xl font-semibold">450k</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 bg-white/50 dark:bg-neutral-900/50">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
