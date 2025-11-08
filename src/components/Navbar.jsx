import { User, Languages, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-black/5 dark:border-white/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-inner" />
          <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">
            FoodLens AI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700 dark:text-neutral-200">
          <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
          <a href="#how" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How it works</a>
          <a href="#demo" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Demo</a>
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Language" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
            <Languages className="h-5 w-5" />
          </button>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 text-sm font-semibold shadow hover:from-blue-500 hover:to-indigo-500">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
