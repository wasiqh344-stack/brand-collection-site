import { Link } from "react-router-dom";
import { ArrowRight, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/bc/hero.jpg";
import storyImg from "@/assets/bc/story.jpg";
import NewsletterSignup from "@/components/NewsletterSignup";
import SocialStrip from "@/components/SocialStrip";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { bestSellers, categories } from "@/data/products";

const perks = [
  { Icon: Truck, title: "Free shipping", copy: "On every order over $100" },
  { Icon: RefreshCw, title: "30-day returns", copy: "Easy, no-questions exchanges" },
  { Icon: ShieldCheck, title: "Made to last", copy: "Premium fabrics, honest pricing" },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[73px] flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Model wearing a black Brand Collection hoodie and orange beanie"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Fall / Winter Collection
            </p>
            <h1 className="display-title mt-5 text-5xl text-white sm:text-6xl lg:text-7xl">
              Wear it<br />
              <span className="text-primary">bold.</span> Own the street.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
              Heavyweight essentials and statement outerwear, cut clean and built to be lived in. This is Brand
              Collection.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/collections"
                className="btn-pill border border-white/30 text-white hover:bg-white hover:text-ink"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-3">
          {perks.map(({ Icon, title, copy }) => (
            <div key={title} className="flex items-center gap-4">
              <span className="rounded-full bg-primary/15 p-3 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em]">{title}</p>
                <p className="text-sm text-muted-foreground">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured collections */}
      <section id="collections" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-primary">Shop by category</p>
            <h2 className="display-title mt-3 text-3xl md:text-4xl">Featured collections</h2>
          </div>
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 80}>
              <Link to={`/collections/${cat.slug}`} className="group relative block overflow-hidden rounded-2xl">
                <img
                  src={cat.image}
                  alt={cat.name}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-lg font-extrabold uppercase tracking-[0.1em] text-white">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/70">{cat.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.18em] text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Shop now <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="bg-warm-bg py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-primary">Most wanted</p>
              <h2 className="display-title mt-3 text-3xl md:text-4xl">Best sellers</h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
            >
              Shop all <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={storyImg}
                alt="Inside the Brand Collection design studio"
                width={1200}
                height={1000}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-primary">Our story</p>
            <h2 className="display-title mt-3 text-3xl md:text-4xl">About Brand Collection</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We started in a Brooklyn workshop with one obsession: everyday clothing that actually holds up. No
              seasonal noise, no throwaway trends — just a tight collection of pieces refined until each one earns its
              place.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every garment is cut from responsibly sourced fabric, sampled a dozen times, and tested by the people who
              wear it daily. That's why the fits feel considered and the fabrics get better with age.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { n: "12", l: "Years making" },
                { n: "40k+", l: "Pieces worn" },
                { n: "100%", l: "Traceable fabric" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl font-extrabold text-primary">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-ink mt-9 gap-2">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <SocialStrip />
      <NewsletterSignup />
    </>
  );
}
