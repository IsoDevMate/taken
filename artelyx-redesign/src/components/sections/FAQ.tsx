import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { faqs } from '@/lib/content'

export function FAQ() {
  return (
    <section id="faq" className="bg-charcoal section-padding">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-6 font-display text-3xl text-cream md:text-4xl lg:text-5xl">
            Questions we hear often.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-white/5 md:mt-16">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} index={i} className="py-6 md:py-8">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-display text-lg text-cream md:text-xl">
                  <span>{faq.q}</span>
                  <span
                    className="mt-1 shrink-0 font-mono text-accent-light transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 pr-8 text-sm leading-relaxed text-cream/45 md:text-base">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
