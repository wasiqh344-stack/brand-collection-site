import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your email provider (Mailchimp, Klaviyo, etc.)
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-ink/70">
          Stay in the loop
        </p>
        <h2 className="display-title mt-3 text-3xl text-ink md:text-4xl">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm text-ink/80">
          Sign up for drops, restocks, and early access. No spam, ever.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink">
            <Check className="h-5 w-5" />
            You're on the list
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-full border border-ink/20 bg-white px-5 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ink/30"
            />
            <button
              type="submit"
              className="btn-ink inline-flex shrink-0 items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
