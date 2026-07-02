import type { Metadata } from "next";
import BookingForm from "@/components/contact/BookingForm";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Book DT Films for your wedding, event, brand campaign, or documentary.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <span className="gold-line" />
          <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-4">
            Get in Touch
          </p>
          <h1
            className="font-display font-light text-ivory"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.92, letterSpacing: "-0.025em" }}
          >
            Let's Create
            <br />
            <em className="italic text-gold">Together</em>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-muted text-sm leading-7 mt-8 max-w-lg">
            Fill in the form below, or message us directly on WhatsApp.
            We aim to respond within 24 hours.
          </p>
        </AnimatedSection>
      </section>

      {/* Content */}
      <section className="pb-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20 items-start">
          {/* Contact info sidebar */}
          <AnimatedSection className="lg:sticky lg:top-28">
            <div className="space-y-10">
              <div>
                <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-4">
                  Email
                </p>
                <a
                  href="mailto:hello@dtfilms.co"
                  className="text-ivory text-sm hover:text-gold transition-colors duration-300"
                >
                  wonderspictures96@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-4">
                  Phone
                </p>
                <a
                  href="tel:+2348179521770"
                  className="text-ivory text-sm hover:text-gold transition-colors duration-300"
                >
                  +234 817 952 1770
                </a>
              </div>

              <div>
                <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-4">
                  Based In
                </p>
                <p className="text-ivory text-sm">Lagos, Nigeria</p>
                <p className="text-muted text-xs mt-1">Available worldwide</p>
              </div>

              <div>
                <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-4">
                  Social
                </p>
                <div className="space-y-2">
                  {[
                    { label: "Instagram", href: "https://instagram.com/visuals_byiyanu" },
                    { label: "Vimeo", href: "https://vimeo.com" },
                    { label: "YouTube", href: "https://youtube.com" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-muted hover:text-ivory transition-colors duration-300"
                    >
                      {label} ↗
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/+2348179521770?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20booking%20DT%20Films."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.1}>
            <BookingForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
