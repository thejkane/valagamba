# Valagamba — Codex project handoff

Snapshot: 2026-11-14. Read this before continuing work, then inspect current
files and Git status. This file describes the final state of the first working
session; some migration notes and older README passages describe source counts
before later user edits.

## Subsequent update: GitLab CI

The user requested GitLab CI/CD for continuous builds. `.gitlab-ci.yml` now uses
`node:24-bookworm-slim`, lockfile-based `npm ci`, npm download caching in `.npm/`,
and `npm run build`. Successful `dist/` output is saved as a job artifact with a
one-week expiry. Branch/tag pushes and merge requests trigger builds; an open MR
suppresses the duplicate branch push pipeline. Manual web runs are supported.
No hosting deployment job or credentials were added. GitLab Runner execution
has not been verified from this workspace. GitLab is now an explicit requested
CI destination; earlier GitHub recommendations below are historical plans.

## Objective and agreed direction

Replace the preliminary WordPress site at https://valagamba.net/ with a
manageable static site. The user is the only editor and wants local development,
GitHub version control, and automatic hosting deployments. Visitors need
browsing, searching, audio/video playback, and downloads. No CMS, accounts, or
database are needed.

Domain registration, DNS, current WordPress hosting, and most media are at
GoDaddy. Recommended future setup: keep domain registration at GoDaddy, use
Cloudflare DNS + Pages for the website, and R2 at `media.valagamba.net` for
large media. These are plans, not provisioned infrastructure. No production
deployment or DNS cutover has been done.

The user asked why static content needs npm. Explained that Astro builds plain
HTML/CSS/JS; npm is a development/build tool, not required for visitors. The user
accepted this and continued with Astro.

## Local setup

- Workspace: `/Users/thejaka/git/valagamba`.
- Saved source pages/assets: `/Users/thejaka/Desktop/dhamma/site/html/`.
  Usually `<slug>.html` plus `<slug>_files/`. Check here before trying web
  extraction: web readers omit audio URLs and sometimes cannot fetch the site.
- Source archives copied into `backups/` are ignored by Git except `.gitkeep`.
- Astro static output, configured in `astro.config.mjs`; production site URL
  is `https://valagamba.net`. Package requires Astro `^6.0.0`; installed version
  at the time of writing is 6.4.8. Commit `package-lock.json`.
- `npm run dev`: normally http://localhost:4321/.
- `npm run build`: generates `dist/`; `npm run preview`: inspect production build.
- Node/npm were missing from the executor PATH, but are installed at
  `/Users/thejaka/.nvm/versions/node/v26.13.1/bin/`. Successful command:

  ```sh
  PATH=/Users/thejaka/.nvm/versions/node/v26.13.1/bin:$PATH npm run build
  ```

- Shell network access was restricted and opening a local listener failed with
  EPERM. No browser-control/preview tool was available. Do not claim visual QA
  or real playback from build success alone. Check capabilities again in a new
  session rather than assuming these limitations persist.

## Architecture and content editing

- `src/content.config.ts`: validated Astro collections for `teachings`, `books`,
  `pages`, and `gallery`.
- `src/content/teachings/*.md`: one recording/lesson per Markdown record.
- `src/layouts/TeachingCollection.astro`: shared collection page, metadata,
  grouped lessons, players, scroll regions, and anchor behavior.
- `src/components/TeachingContents.astro`: navigation, including nested parts.
- `src/components/YouTubePlayer.astro`: lazy YouTube embeds and watch links.
- `SiteHeader.astro` / `SiteFooter.astro`: shared site navigation and branding.
- `src/data/categories.json`: homepage cards, order, filter group, and local link
  flag. Card numbers are generated from array positions.
- `src/styles/`: global palette/typography and page styles. Visual direction:
  warm ivory, forest green, muted gold; Sinhala-first; responsive.
- `public/images/`: small static images, tribute, gallery originals/thumbnails.
- `content-templates/`: editing examples. Check against the actual schemas when
  using them. `src/content/series/` is currently only a placeholder; groups are
  configured in route props, not loaded from that directory.
- Migration provenance and exceptions: `migration/*.md`; intended URL mappings:
  `migration/url-map.csv`. That CSV does not itself install redirects.

### Lesson identity, order, and grouping

- `series` selects the collection route; `category` accompanies it.
- `order` is unique within a collection and forms anchors `#teaching-N`.
- `lessonGroup` matches a configured group ID in the route's `groups` prop.
- `groupOrder` determines position within that group, falling back to `order`.
- Display numbering comes from the current position and restarts at 1 in each
  group. A request to move lesson 18 means its current displayed position,
  not necessarily file `*-18.md` or `order: 18`. Inspect content before editing.
- `audioUrl`, `videoUrl`, `youtubeId` are optional media fields; MP4 lessons can
  have accompanying audio. Preserve URL case and source formats (MP3/M4A/MP4).
- `menuParent` groups adjacent navigation entries, e.g. `සාකච්චාව 1`.
  `menuLabel` labels children, e.g. `කොටස 1`, `කොටස 2` (user requested Sinhala,
  replacing English "part"). Full recording titles remain intact.
- Native `<details open>` groups are expanded by default. Both sidebar groups
  and main recording groups scroll independently and collapse/expand. Lesson
  anchors open a collapsed recording group. Ungrouped pages can opt into a
  scrolling menu with `scrollContents`.
- Starting native audio/video pauses other native players. YouTube is embedded
  separately and is not controlled by that pause behavior.

## Current routes and counts

| Route | Current content |
| --- | --- |
| `/` | Landing page, searchable/filterable category directory, books/about links |
| `/basic-vipassana/` | 12 lessons: three YouTube, nine MP3; local reference image; scrolling menu |
| `/vipassana-dhamma/` | 22 lessons: group 1 has 17, group 2 has five |
| `/sathiya/` | Two MP3 lessons, also referenced in Vipassana |
| `/advance-dhamma/` | Seven MP3 lessons; commented-out source lesson excluded |
| `/abhidhamma-deshana/` | 12 audio lessons in three groups: five discussions, three Dhammasangani, four Patthana |
| `/abhiandvipassana/` | Seven MP4 lessons; five also have separate audio; source lesson 6 commented out |
| `/vidarshana-using-abhidhamma/` | Group 1: nine lessons (YouTube + eight audio); group 2: six (five MP4 + YouTube) |
| `/short-discussions/` | 11 lessons: one audio first, followed by ten YouTube |
| `/other-dhamma/` | Four MP3 lessons; new homepage category |
| `/books/` | 13 PDF records, six audio explanations attached to their book; search and language filters |
| `/about/` | Original image-based tribute, credited to Dr. Lasitha Malalasekara, copied locally |
| `/gallery/` | 19 local photos, proportional WebP thumbnails, grid and modal full-size viewer |

Total: 92 teaching records and 13 built pages at this snapshot. All current
homepage teaching categories link locally. The user removed the Sutta category
(`/sutta-dhamma/`); do not restore it automatically.

### User-approved editorial changes

- Vipassana titles shortened to `වේදනානුපස්සනාව` and `අනාත්ම ලක්ෂණය`.
- Vipassana group 1's current file suffix sequence is:
  `01, 02, 08, 15, 05, 07, 03, 09, 11, 12, 10, 04, 13, 21, 14, 22, 23`.
  Prefix: `vipassana-dhamma-`. Display numbering is 1–17.
- Vipassana group 2 retains source lessons 16–20, displayed 1–5.
- `පඹයා සහ රොබො`, previously group 1 position 18, moved to the first position
  in Short Discussions. File: `short-discussions-pabaya-robo.md`; the original
  ten files keep their names but now have `order` 2–11. It uses GoDaddy `3.mp3`.
- Four Patthana audio lessons moved out of `/abhiandvipassana/` into
  `/abhidhamma-deshana/#patthana`; files `patthana-01.md`–`patthana-04.md`.
- Abhidhamma's first two groups combine `/abhidhamma-dhamma/` and
  `/dhammasanganiparakaran/`; former page redirects are planned, not installed.
- Vidarshana combines the original I and II pages under the first URL.
  Group 2's first four menu entries are nested as `සාකච්චාව 1` → `කොටස 1/2`
  and `සාකච්චාව 2` → `කොටස 1/2`.
- Gallery captions/alt text for display images 16 and 19 identify
  `Venerable Bellanwila Dhammananda Thero`, as explicitly requested by the user.
  Original source filenames skip 19; display image 19 is source `20-765x1024.jpg`.

## Page-specific migration details

- Books: all PDF/MP3 URLs remain external. `විඤ්ඤාණය` has separate original
  `viewUrl` and `pdfUrl`; keep both. Do not invent an author credit for the
  source entry that lacks one. Six explanations belong to
  `අභිධර්මය නොවන අභිධර්මය`. English/Sinhala filters and search are client-side;
  all books remain visible without JS.
- About: image `public/images/about-tribute.png` is unchanged (791 × 1024).
  It contains the tribute text as pixels; there is no reviewed transcription.
- Gallery: plugin carousel replaced with a responsive uncropped grid and native
  dialog viewer. Previous/next, arrow keys, Escape, close button, focus return,
  and no-JS image links are implemented. All 19 originals are copied unchanged;
  thumbnails made using installed Sharp. Data is in `src/content/gallery/aranya.md`.
  No WordPress scripts or external gallery image dependency remain.
- Some source download links were wrong. Dhammasangani lessons 2/3 now link to
  their actual audio source rather than lesson 1. The unusual companion audio
  URL `NamaRupaVideo-5.mp3` was preserved from the source and still needs live
  checking. Never guess replacement media URLs from filename patterns.

## Verification and known limits

Production builds passed after the structural changes. One-off checks compared
generated titles, recording associations, order, counts, group membership,
numbering, anchors, and direct links against the saved source HTML. Gallery
originals were byte-compared, thumbnail metadata checked, and a contact sheet
visually inspected. There is no committed automated test suite.

Actual browser page layout, modal interactions, search/filter behavior, and
external recording/PDF availability have not been comprehensively browser-tested.
The user once could not see players; a server restart and hard refresh were
suggested, then the user continued. No verified root cause was established.

## Remaining work and production dependencies

1. Review all routes in a browser, on desktop/mobile; check real audio/video/PDF
   playback, filter controls, grouped scrolling, keyboard focus, and gallery viewer.
2. Migrate large media from GoDaddy to the selected storage; deduplicate files
   referenced in multiple collections. Keep independent backups and verify bytes.
3. Copy/update the home hero image, currently an external GoDaddy image.
   Google Fonts are also external, with system fallbacks.
4. Implement and test redirects from the migration CSV, including merged pages,
   old media URLs, and any shared image/attachment URLs. Do not mistake recorded
   mappings for deployed redirects. Evaluate old lesson anchors after editorial moves.
5. Configure GitHub remote/deployment integration and staging previews when
   requested. No Cloudflare project, R2 bucket, DNS, or GitHub Actions was created.
6. At cutover, preserve email DNS records, verify HTTPS, and keep WordPress
   available for rollback until all dependencies have moved.

## Git state and session permissions

User initialized Git and committed the site. Verified initial commit:
`1a3a613 Initial site content commit`. The worktree was clean immediately before
creating these handoff documents. Recheck current Git status in the next session.

The previous executor could read `.git` but `git add .` failed creating
`.git/index.lock` with "Operation not permitted". Nothing was staged by the
assistant; the user subsequently made the initial commit from their terminal.
Treat this as a session permission limitation, not a corrupt lock to delete.

Track source, content, images, docs, package files/lockfile, and `.gitignore`.
Do not track `node_modules/`, `dist/`, `.astro/`, source backups, `.env` files,
or large recordings/PDFs. Keep the existing exclusions.
