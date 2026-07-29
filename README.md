# Brand Collection — Missing Files

Yeh files aapke Index.tsx mein import ho rahi thi lekin project mein nahi thi. Maine sab
bana di hain taake Lovable/Vite build error na de.

## Structure
```
src/
├── pages/
│   └── Index.tsx              (aapki original homepage file)
├── components/
│   ├── Reveal.tsx              (scroll fade-up animation wrapper)
│   ├── ProductCard.tsx         (product grid card)
│   ├── SocialStrip.tsx         (instagram grid strip)
│   └── NewsletterSignup.tsx    (email signup form)
├── data/
│   └── products.ts             (categories, bestSellers, socialImages)
└── assets/bc/
    ├── hero.jpg                (PLACEHOLDER — replace with real photo)
    ├── story.jpg               (PLACEHOLDER — replace with real photo)
    ├── cat-men.jpg              (PLACEHOLDER)
    ├── cat-women.jpg            (PLACEHOLDER)
    ├── cat-outerwear.jpg        (PLACEHOLDER)
    ├── cat-accessories.jpg      (PLACEHOLDER)
    └── product-1.jpg ... product-8.jpg  (PLACEHOLDER)
```

## Important — placeholder images
Saari `.jpg` files orange/black gradient placeholders hain sirf isliye ke build fail na ho.
Inhe apni real product/model photos se replace karein — same file names rakhen
(`hero.jpg`, `story.jpg`, etc.) taake code mein kahin aur change na karna paray.

## Not included (check these exist in your project already)
- `ink`, `primary`, `warm-bg`, `background`, `foreground`, `muted-foreground`,
  `border` color tokens — inhe apni `tailwind.config` / `index.css` mein define hona chahiye.
- `font-display` font family — Tailwind config mein set honi chahiye.
- `.btn-primary`, `.btn-pill`, `.btn-ink` — yeh custom utility classes hain, apni global CSS
  (`index.css`) mein `@layer components` ke through define karein agar pehle se nahi hain.
- Routes `/shop`, `/collections`, `/collections/:slug`, `/product/:slug`, `/about` — inke liye
  pages banani hongi agar abhi tak nahi banayi.

## Kaise use karein
1. Is poore `brand-collection/src` folder ko apne Lovable/GitHub project ke `src` folder mein
   merge/paste kar dein (files replace na karein agar already same-name files hain jab tak
   sure na hon).
2. Real photos se placeholder jpgs replace karein.
3. Agar color tokens ya btn classes missing hain to woh add karein.
