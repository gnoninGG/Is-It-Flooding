"use client";

import { useState } from "react";

const reports = [
  { place: "Espa\u00f1a Boulevard", level: "Passable with caution", time: "12 min ago", x: "47%", y: "45%", tone: "bg-amber-400" },
  { place: "Taft Avenue", level: "Road flooding reported", time: "28 min ago", x: "62%", y: "58%", tone: "bg-orange-500" },
  { place: "Marikina River", level: "Monitor official advisory", time: "41 min ago", x: "76%", y: "28%", tone: "bg-rose-500" },
];

export default function Home() {
  const [panel, setPanel] = useState<"idle" | "form" | "success">("idle");
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-5 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700 pb-5">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Community flood intelligence</p><h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Is It Flooding?</h1></div>
          <div className="flex items-center gap-3"><span className="rounded-full border border-amber-300/50 bg-amber-300/10 px-3 py-2 text-xs font-semibold text-amber-100">Devnet</span><button className="min-h-10 rounded-md bg-amber-300 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-amber-200" onClick={() => setPanel("form")}>Report conditions</button></div>
        </header>
        <p className="mt-5 max-w-prose text-sm leading-6 text-slate-200">Live reports from people nearby. Check official local-government and emergency advisories before travelling.</p>
        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="relative min-h-[480px] overflow-hidden rounded-lg border border-slate-700 bg-slate-900" aria-label="Flood reports map">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
            <div className="absolute left-[8%] top-[18%] h-[3px] w-[62%] -rotate-[12deg] bg-cyan-300/50" /><div className="absolute left-[27%] top-[58%] h-[3px] w-[52%] rotate-[24deg] bg-cyan-300/50" />
            {reports.map((report) => <button key={report.place} className={`pulse-dot absolute h-11 w-11 rounded-full ${report.tone} border-4 border-slate-950 shadow-lg`} style={{ left: report.x, top: report.y }} aria-label={`${report.place}: ${report.level}`} onClick={() => setPanel("form")} />)}
            <div className="absolute bottom-4 left-4 rounded-md border border-slate-700 bg-slate-950/90 p-3 text-xs text-slate-100"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400" />Community observation · locations rounded for privacy</div>
          </div>
          <aside className="rounded-lg border border-slate-700 bg-slate-900 p-5"><h2 className="text-lg font-bold">Latest reports</h2><ul className="mt-4 space-y-3" aria-live="polite">{reports.map((report) => <li key={report.place} className="border-b border-slate-700 pb-3 last:border-0"><p className="font-semibold">{report.place}</p><p className="mt-1 text-sm text-amber-200">{report.level}</p><p className="mt-1 text-xs text-slate-300">{report.time}</p></li>)}</ul>
            {panel === "form" && <div className="mt-5 rounded-md border border-amber-300/40 bg-amber-300/10 p-3"><p className="text-sm font-semibold">Report flow ready</p><p className="mt-1 text-xs leading-5 text-slate-200">Wallet connection, coarse-location preview, severity selection, and a transaction review will be added before devnet launch.</p><button className="mt-3 min-h-10 rounded-md bg-slate-100 px-3 py-2 text-sm font-bold text-slate-950 hover:bg-white" onClick={() => setPanel("success")}>Preview submission</button></div>}
            {panel === "success" && <div className="mt-5 rounded-md border border-emerald-300/50 bg-emerald-300/10 p-3 text-sm text-emerald-100">Preview saved. No location or transaction was submitted.</div>}
          </aside>
        </section>
      </div>
    </main>
  );
}
