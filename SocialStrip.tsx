import { Instagram } from "lucide-react";
import { socialImages } from "@/data/products";

export default function SocialStrip() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-primary">
              Join the movement
            </p>
            <h2 className="display-title mt-3 text-2xl md:text-3xl">
              Follow @brandcollection
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            Follow
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {socialImages.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt="Brand Collection on Instagram"
                width={300}
                height={300}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/40">
                <Instagram className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
