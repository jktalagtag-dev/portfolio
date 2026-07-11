import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/*
 * One-time asset optimization: the project screenshots in
 * public/projects/ were shipped as raw, full-resolution PNG screen
 * captures (tens of MB each) with no resizing or compression. This
 * resizes them to a sane max width for their largest real usage
 * (the desktop carousel's image column) and re-encodes as WebP.
 * Run with: node scripts/optimize-images.mjs
 *
 * Source files are left in place (not deleted) — only new .webp
 * files are added alongside them, and app code is updated
 * separately to reference the new files.
 */

const PROJECTS_DIR = path.resolve(
  import.meta.dirname,
  "../public/projects"
);

const MAX_WIDTH = 2400;
const WEBP_QUALITY = 80;

const projectImages = ["1.png", "2.png", "3.png", "project-1.png"];

async function optimizeProjectImage(filename) {
  const input = path.join(PROJECTS_DIR, filename);
  const outName = filename.replace(/\.(png|jpe?g)$/i, ".webp");
  const output = path.join(PROJECTS_DIR, outName);

  const meta = await sharp(input).metadata();

  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(output);

  const { size: inSize } = await stat(input);
  const { size: outSize } = await stat(output);

  console.log(
    `${filename} (${meta.width}x${meta.height}, ${(
      inSize / 1024 / 1024
    ).toFixed(2)}MB) -> ${outName} (${(outSize / 1024).toFixed(
      1
    )}KB)`
  );
}

async function optimizeJpg(filename) {
  const input = path.join(PROJECTS_DIR, filename);
  const outName = filename.replace(/\.jpe?g$/i, ".webp");
  const output = path.join(PROJECTS_DIR, outName);

  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(output);

  const { size: inSize } = await stat(input);
  const { size: outSize } = await stat(output);

  console.log(
    `${filename} (${(inSize / 1024).toFixed(
      1
    )}KB) -> ${outName} (${(outSize / 1024).toFixed(1)}KB)`
  );
}

async function generateFavicons() {
  const input = path.join(PROJECTS_DIR, "icon.png");

  const sizes = [
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-16x16.png", size: 16 },
    { name: "apple-touch-icon.png", size: 180 },
  ];

  for (const { name, size } of sizes) {
    const output = path.join(PROJECTS_DIR, name);
    await sharp(input).resize(size, size).png().toFile(output);
    const { size: outSize } = await stat(output);
    console.log(
      `icon.png -> ${name} (${(outSize / 1024).toFixed(1)}KB)`
    );
  }
}

async function main() {
  const files = await readdir(PROJECTS_DIR);
  console.log(`Found ${files.length} entries in ${PROJECTS_DIR}\n`);

  for (const filename of projectImages) {
    if (files.includes(filename)) {
      await optimizeProjectImage(filename);
    }
  }

  if (files.includes("project-3.jpg")) {
    await optimizeJpg("project-3.jpg");
  }

  if (files.includes("icon.png")) {
    await generateFavicons();
  }

  console.log("\nDone. Source files were left in place.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
