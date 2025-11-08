import { useRef, useState } from "react";
import { UploadCloud, Trash2, Sparkles } from "lucide-react";

export default function DemoUploader() {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const onSelect = (e) => {
    const chosen = Array.from(e.target.files || []).slice(0, 10);
    setFiles(chosen);
  };

  const remove = (idx) => setFiles((f) => f.filter((_, i) => i !== idx));

  const fakeAnalyze = () => {
    // Local mock: compute a playful health score from file count
    const score = Math.max(20, Math.min(95, 100 - (files.length * 6)));
    alert(`Mock analysis complete! Health Score: ${score}/100.\n\nThis demo UI showcases the experience. In production, photos are sent to the backend for OCR + AI.`);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-blue-50/40 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Try the scanning flow</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">Upload 5–10 images (front, ingredients, barcode, nutrition). We’ll parse labels, compute a health score, and suggest a homemade recipe.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-8 text-center">
            <input ref={inputRef} type="file" multiple accept="image/*" onChange={onSelect} className="hidden" />
            <button onClick={() => inputRef.current?.click()} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:from-blue-500 hover:to-indigo-500">
              <UploadCloud className="h-5 w-5" /> Select 5–10 photos
            </button>
            <p className="mt-3 text-xs text-neutral-500">Front label, ingredients, barcode, dates, nutrition table</p>

            {files.length > 0 && (
              <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-3">
                {files.map((file, i) => {
                  const url = URL.createObjectURL(file);
                  return (
                    <div key={i} className="relative group rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                      <img src={url} alt={`upload-${i}`} className="h-28 w-full object-cover" />
                      <button aria-label="Remove" onClick={() => remove(i)} className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white opacity-0 group-hover:opacity-100 transition">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-6 flex justify-center">
              <button disabled={files.length < 5} onClick={fakeAnalyze} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 disabled:bg-emerald-600/50 text-white px-5 py-3 text-sm font-semibold shadow">
                <Sparkles className="h-5 w-5" /> Analyze with AI
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60">
            <h3 className="text-lg font-semibold">What you’ll get</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Product name, brand, parent company</li>
              <li>• OCR of ingredients, nutrition table, dates</li>
              <li>• Harmful/beneficial ingredient explanations</li>
              <li>• Health Score with green/yellow/red bar</li>
              <li>• Eco-Impact rating and origin</li>
              <li>• A healthier homemade recipe with costs in ₹</li>
              <li>• “Make it 20% Healthier” quick tweak</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
