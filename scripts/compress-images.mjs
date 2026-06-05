import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const imagesDir = "public/images";

const targets = {
  "contact/contact-hero.webp": { width: 900, quality: 72 },
  "about/about-mascot.webp": { width: 650, quality: 74 },
  "about/about-cta.webp": { width: 1200, quality: 70 },

  "blog/blog-main.webp": { width: 1000, quality: 72 },
  "blog/blog-1.webp": { width: 800, quality: 72 },
  "blog/blog-2.webp": { width: 800, quality: 72 },
  "blog/blog-3.webp": { width: 800, quality: 72 },
  "blog/blog-4.webp": { width: 800, quality: 72 },

  "offers/offer-1.webp": { width: 1200, quality: 72 },
  "offers/offer-2.webp": { width: 1200, quality: 72 },
  "offers/offer-3.webp": { width: 1200, quality: 72 },
  "offers/offer-4.webp": { width: 1200, quality: 72 },
  "offers/offer-5.webp": { width: 1200, quality: 72 },

  "vehicles/velo-pro.webp": { width: 650, quality: 74 },
  "vehicles/velo-cruise.webp": { width: 650, quality: 74 },
  "vehicles/velo-city.webp": { width: 650, quality: 74 },

  "home/hero-scooter.webp": { width: 900, quality: 74 },
  "home/app-devices.webp": { width: 900, quality: 74 },
};

for (const [relativePath, options] of Object.entries(targets)) {
  const input = path.join(imagesDir, relativePath);
  const temp = input.replace(".webp", ".compressed.webp");

  try {
    await sharp(input)
      .resize({
        width: options.width,
        withoutEnlargement: true,
      })
      .webp({
        quality: options.quality,
        effort: 6,
      })
      .toFile(temp);

    await fs.rename(temp, input);

    const stat = await fs.stat(input);
    console.log(`✅ ${relativePath} -> ${(stat.size / 1024).toFixed(0)} KB`);
  } catch (error) {
    console.log(`⚠️ Skip ${relativePath}: ${error.message}`);
  }
}