export default function Page() {
  const faqs = [
    {
      q: "Which cloud providers are supported?",
      a: "AWS, Google Cloud Platform, and Microsoft Azure. We analyze IAM permissions, service quotas, and current usage to estimate maximum blast radius."
    },
    {
      q: "Is it safe to enter my API keys?",
      a: "Keys are never stored. Analysis runs in-memory and all data is discarded after your session. We use read-only permission checks only."
    },
    {
      q: "How is the damage estimate calculated?",
      a: "We query your provider's pricing API, enumerate accessible resources and service limits, then compute worst-case cost if an attacker spun up maximum allowed resources."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Calculate Your API Key{" "}
          <span className="text-[#58a6ff]">Blast Radius</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste an AWS, GCP, or Azure API key and instantly see the maximum financial damage an attacker could cause if it leaked — before they do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $25/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No keys stored. Read-only analysis.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "🔍", title: "Permission Audit", desc: "Maps every IAM role and policy attached to your key" },
          { icon: "💸", title: "Cost Estimate", desc: "Worst-case spend if an attacker maxes out your quotas" },
          { icon: "🛡️", title: "Remediation Tips", desc: "Actionable steps to reduce your blast radius immediately" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$25</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited key analyses",
              "AWS, GCP & Azure support",
              "Real-time permission mapping",
              "Worst-case cost simulation",
              "Remediation recommendations",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Key Blast Radius Calculator. All rights reserved.
      </footer>
    </main>
  );
}
