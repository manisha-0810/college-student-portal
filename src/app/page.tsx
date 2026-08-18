const navItems = ["Platform", "Solutions", "Resources", "Pricing"];

const metrics = [
  { value: "72%", label: "faster first drafts" },
  { value: "4.8x", label: "more proposals handled" },
  { value: "98%", label: "content compliance checks" },
];

const features = [
  {
    title: "RFP intake",
    copy: "Upload docs, emails, spreadsheets, or portal exports and turn every requirement into a clean response plan.",
  },
  {
    title: "AI answer library",
    copy: "Reuse approved language, proof points, security responses, and customer evidence without hunting through folders.",
  },
  {
    title: "Review workflows",
    copy: "Route sections to subject matter experts, collect comments, and lock final answers before submission.",
  },
  {
    title: "Proposal analytics",
    copy: "See gaps, confidence scores, reviewer status, and win themes before your team presses send.",
  },
];

const steps = [
  "Parse the RFP and detect every question, attachment, and deadline.",
  "Draft accurate answers from your trusted knowledge base.",
  "Collaborate with sales, legal, security, and product in one workspace.",
  "Export a polished response package ready for the customer portal.",
];

const faqs = [
  {
    question: "Can RFP.ai use our existing content?",
    answer: "Yes. The workspace is designed around approved source material, past proposals, security docs, product sheets, and SME notes.",
  },
  {
    question: "Does the platform support team review?",
    answer: "Every section can be assigned, commented on, approved, and tracked so owners know exactly where the response stands.",
  },
  {
    question: "Is this only for enterprise RFPs?",
    answer: "No. The same workflow works for RFIs, security questionnaires, DDQs, grants, and repeat customer questionnaires.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171717]">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f4ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="RFP.ai home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#111827] text-sm font-black text-white">R</span>
            <span className="text-xl font-black tracking-tight">RFP.ai</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-black/70 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-black">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm font-semibold text-black/70 transition hover:text-black sm:inline">
              Log in
            </a>
            <a href="#demo" className="rounded-full bg-[#111827] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-black">
              Book demo
            </a>
          </div>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-[#41644a] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#6fbf73]" />
              AI proposal automation for revenue teams
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#151515] sm:text-6xl lg:text-7xl">
              Win more RFPs with AI that knows your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              RFP.ai helps proposal teams find the right answers, collaborate with experts, and ship compliant responses in a fraction of the time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#demo" className="rounded-full bg-[#f05a28] px-7 py-4 text-center text-sm font-black text-white shadow-xl shadow-[#f05a28]/20 transition hover:-translate-y-0.5">
                Request a demo
              </a>
              <a href="#platform" className="rounded-full border border-black/15 bg-white px-7 py-4 text-center text-sm font-black text-black transition hover:-translate-y-0.5 hover:border-black">
                Explore platform
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-black/10 bg-white/70 p-4">
                  <div className="text-2xl font-black text-[#111827]">{metric.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-black/50">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#f05a28]/15 blur-3xl" />
            <div className="absolute -bottom-14 -left-12 h-52 w-52 rounded-full bg-[#7aa874]/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-black/10 bg-[#151515] p-3 shadow-2xl shadow-black/20">
              <div className="rounded-[1.4rem] bg-[#fbfaf7] p-4">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-black/40">Active response</p>
                    <h2 className="mt-1 text-xl font-black">Acme Cloud RFP</h2>
                  </div>
                  <span className="rounded-full bg-[#e8f6e9] px-3 py-1 text-xs font-black text-[#2f6f38]">82% ready</span>
                </div>
                <div className="grid gap-4 py-4 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-3">
                    {["Security", "Implementation", "Pricing"].map((item, index) => (
                      <div key={item} className="rounded-lg border border-black/10 bg-white p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-black">{item}</span>
                          <span className="text-xs font-bold text-black/45">{index === 0 ? "Done" : index === 1 ? "Review" : "Draft"}</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-black/10">
                          <div className="h-2 rounded-full bg-[#f05a28]" style={{ width: index === 0 ? "100%" : index === 1 ? "72%" : "48%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl bg-[#111827] p-5 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-white/40">AI recommendation</p>
                    <h3 className="mt-4 text-2xl font-black leading-tight">Use approved SOC 2 language and add uptime proof point.</h3>
                    <p className="mt-4 text-sm leading-6 text-white/65">
                      Matched from security questionnaire v12, enterprise SLA sheet, and two recent winning responses.
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs font-black">
                      <span className="rounded-lg bg-white/10 p-3">12 refs</span>
                      <span className="rounded-lg bg-white/10 p-3">High fit</span>
                      <span className="rounded-lg bg-white/10 p-3">Needs SME</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-[#f05a28]/20 bg-[#fff4ef] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-bold text-[#7a3218]">Next: Legal approval for data retention answer</p>
                    <button className="rounded-full bg-[#f05a28] px-4 py-2 text-xs font-black text-white">Assign reviewer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f05a28]">One response hub</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Everything your proposal team needs to move faster.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-lg border border-black/10 bg-[#fbfaf7] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                <div className="mb-6 grid h-11 w-11 place-items-center rounded-lg bg-[#111827] text-lg font-black text-white">{feature.title.charAt(0)}</div>
                <h3 className="text-xl font-black">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/60">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#41644a]">From request to response</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A calm workflow for high-stakes deadlines.</h2>
            <p className="mt-5 text-lg leading-8 text-black/60">
              Replace scattered docs and last-minute answer chasing with a guided workspace that keeps every stakeholder aligned.
            </p>
          </div>
          <div className="rounded-2xl bg-[#151515] p-3">
            <div className="grid gap-3 rounded-xl bg-[#fbfaf7] p-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-lg border border-black/10 bg-white p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f05a28] text-sm font-black text-white">{index + 1}</span>
                  <p className="self-center text-sm font-semibold leading-6 text-black/70">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="bg-[#111827] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f7b08f]">Connected content</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Works with your proposal stack.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            {["Salesforce", "Google Drive", "SharePoint", "Slack", "Microsoft Teams", "DocuSign"].map((tool) => (
              <div key={tool} className="rounded-lg border border-white/10 bg-white/5 p-5 text-lg font-black">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f05a28]">Questions</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Built for teams that cannot afford messy answers.</h2>
            <div className="mt-8 rounded-lg bg-[#f7f4ee] p-6">
              <p className="text-xl font-black leading-8">
                "RFP.ai gives our team a single source of truth. We respond faster, reviewers know where to focus, and our answers stay consistent."
              </p>
              <p className="mt-5 text-sm font-black uppercase tracking-wide text-black/50">VP of Revenue Operations</p>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-black/10 p-5 open:bg-[#fbfaf7]">
                <summary className="cursor-pointer list-none text-lg font-black">{faq.question}</summary>
                <p className="mt-4 text-sm leading-7 text-black/60">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f05a28] p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white/70">Ready when you are</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Turn your next RFP into your fastest response yet.</h2>
            </div>
            <a href="mailto:sales@rfp.ai" className="rounded-full bg-white px-8 py-4 text-center text-sm font-black text-[#151515] transition hover:-translate-y-0.5">
              Contact sales
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-black/55 sm:flex-row sm:items-center sm:justify-between">
          <p>RFP.ai clone concept</p>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
