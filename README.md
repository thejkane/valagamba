# Valagamba

For future Codex sessions, start with [CODEX_HANDOFF.md](CODEX_HANDOFF.md).
It records the current organization and overrides historical counts in migration
notes where later editorial changes moved lessons between collections.

Gallery is local at `/gallery/`, with 19 photos, responsive uncropped thumbnails,
and a keyboard-accessible full-size viewer. Edit `src/content/gallery/aranya.md`
to maintain the image sequence and descriptions. Images and thumbnails live in
`public/images/gallery/`. See `migration/gallery.md` for the layout repair and
verification details.

The tribute page is local at `/about/`. Its metadata is in
`src/content/pages/about.md`; the original image-based tribute is stored at
`public/images/about-tribute.png`. See `migration/about.md` for provenance.

Books are available at `/books/`: 13 PDFs with language filters and title/credit
search, plus six audio explanations attached to their book. Edit
`src/content/books/*.md` to maintain the catalog; `order` sets the display
sequence, `pdfUrl` provides the file link, and optional `viewUrl` preserves a
separate reading link. See `migration/books.md` for migration details.

Other teachings are available at `/other-dhamma/`. Edit `other-dhamma-*.md`
for its four audio lessons. See `migration/other-dhamma.md` for source details.

Short teachings are available at `/short-discussions/`. Edit
`short-discussions-*.md` for its ten YouTube lessons. Source details are in
`migration/short-discussions.md`.

Vipassana through Abhidhamma is available at `/vidarshana-using-abhidhamma/`,
with two groups (nine and six lessons) from the original part I and II pages.
Edit `vidarshana-using-abhidhamma-*.md` and
`vidarshana-using-abhidhamma2-*.md` for these lessons. Both use the
`vidarshana-using-abhidhamma` series. See
`migration/vidarshana-using-abhidhamma.md` for details.

Static replacement for valagamba.net. Content is maintained locally and will be
built with Astro, versioned in GitHub, and deployed to Cloudflare Pages.

## Run the landing page

Install a current Node.js LTS release (Node 22.12 or newer), then run from this
directory:

```sh
npm install
npm run dev
```

Open the local address printed by Astro. To generate the static website, run
`npm run build`; the output goes to `dist/`. Use `npm run preview` to inspect it.
Commit the generated `package-lock.json` after installing dependencies.

The landing page is `src/pages/index.astro`; its styles are in
`src/styles/global.css`. Edit `src/data/categories.json` to update the category
directory. Search filters category titles in Sinhala or English, not individual
teachings yet. All categories remain visible when JavaScript is unavailable.

The Basic Vipassana, Vipassana, mindfulness, and further Dhamma study categories open the local
`/basic-vipassana/`, `/vipassana-dhamma/`, `/sathiya/`, and `/advance-dhamma/` pages.
Abhidhamma opens `/abhidhamma-deshana/`, combining discussions and Dhammasangani
into expandable groups, including the four Patthana lessons.
Abhidhamma and Vipassana videos open `/abhiandvipassana/`. Other
category, book, gallery, and tribute links open the existing live WordPress site.
Replace
these with local paths as each section is migrated, before switching the domain.
The hero uses the existing site's Buddha image; copy it into `public/images/`
and update its URL before retiring the old hosting. Fonts currently load from
Google Fonts with system fallbacks.

## Directory structure

```text
src/
  content/
    teachings/     # One Markdown file per audio/video teaching
    series/        # Ordered collections of teachings
    books/         # Book descriptions and PDF links
    pages/         # Home, about, tribute, and other informational content
    gallery/       # Gallery descriptions and image references
  data/            # Category definitions, navigation, and site settings
public/
  images/          # Small, optimized website images
content-templates/ # Copy these templates when adding content
migration/         # WordPress URL inventory and redirect mapping
backups/           # Local backups; excluded from Git
```

## Adding content

1. Copy the appropriate file from `content-templates/` into its collection under
   `src/content/`.
2. Use a stable lowercase filename with hyphens, such as `basic-vipassana-01.md`.
   Sinhala belongs in the title and body; filenames act as stable identifiers.
3. Replace the example fields and write the description below the front matter.
4. Keep `draft: true` until the entry has been reviewed.

Templates are examples. The teachings collection now has a schema in
`src/content.config.ts`. Collection pages use the shared
`src/layouts/TeachingCollection.astro` template. Each teaching requires a `series`, an `order`,
and an `originalUrl`. Optional fields can be
omitted when unknown; do not invent dates, durations, or translations.

For Basic Vipassana, edit the 12 `basic-vipassana-*.md` files to update titles or
media. Use `audioUrl` for a recording or `youtubeId` for an 11-character YouTube
video ID. All 12 Basic Vipassana entries now have players: three YouTube videos
and nine MP3 recordings. The reference image is local; MP3 files still load from
GoDaddy. See `migration/basic-vipassana.md` for the remaining storage migration.

For Vipassana teachings, edit `vipassana-dhamma-*.md`. These 23 entries contain
four YouTube videos and 19 audio recordings, including three M4A files. See
`migration/vipassana-dhamma.md` for migration details. Keep each entry's `series`
set to `vipassana-dhamma` and use `order` to control the listening sequence.

For mindfulness teachings, edit `sathiya-*.md`. Both audio recordings are also
referenced in the Vipassana collection, so update both collections when moving
those media files. See `migration/sathiya.md` for details.

For further Dhamma study, edit `advance-dhamma-*.md`. These seven audio lessons
follow the source page's visible content; its commented-out lesson is excluded.
See `migration/advance-dhamma.md` for details.

For Abhidhamma, edit `abhidhamma-dhamma-*.md` (five discussions) and
`dhammasanganiparakaran-*.md` (three recordings). Both use the
`abhidhamma-deshana` series, with separate `lessonGroup` values. See
`migration/abhidhamma-deshana.md` for sources and migration details.

## Media

Keep large audio, video, and PDF files out of Git. Content files reference their
URLs. During migration, existing GoDaddy URLs can be retained until verified
replacement files are available. The planned permanent location is
`https://media.valagamba.net/` on Cloudflare R2; it is not configured yet.

Keep an independent backup of original media. Put local WordPress backups in
`backups/`, which is ignored by Git. Never commit credentials or database dumps.

## Migration

Record old URLs and replacement paths in `migration/url-map.csv`. Include media
URLs as well as pages. Preserve existing paths where possible. This inventory
will be used to prepare redirects before launch.

The Vipassana collection has two lesson groups defined in its page props. Set
`lessonGroup` to `malawa-1` or `malawa-2` in each teaching file. Group 1 contains
lessons 1–15 and 21–23; group 2 contains lessons 16–20. Display numbering restarts at 1 within each group. Original `order` values
control the sequence and preserve existing anchor links.

Use `groupOrder` to set the display sequence within a lesson group. The page
renumbers lessons from 1 in that sequence; `order` retains the original identity
for stable anchor links.

Grouped collections use native expand/collapse controls, expanded by default,
with independent scrolling in each group’s navigation and recordings. Following
a lesson link opens its group automatically.

For Abhidhamma and Vipassana videos, edit `abhiandvipassana-*.md`. Use `videoUrl`
for MP4 playback and `audioUrl` for a separate audio recording when available.
See `migration/abhiandvipassana.md` for source details and remaining media work.

Patthana audio lessons are maintained in `patthana-*.md` under the
`abhidhamma-deshana` series and `patthana` lesson group. They display on the
Abhidhamma page; `/abhiandvipassana/` contains the seven video lessons.

To nest multipart lessons in navigation, give consecutive entries the same
`menuParent` (such as `සාකච්චාව 1`) and a `menuLabel` (such as `part 1`).
This changes menu labels while keeping full lesson titles and players intact.
