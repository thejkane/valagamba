# Basic Vipassana migration

Source: https://valagamba.net/basic-vipassana/

Verified against the browser-saved HTML provided at
`~/Desktop/dhamma/site/html/basic-vipassana.html`. A copy is retained in the
Git-ignored `backups/basic-vipassana.html`.

## Migrated content

- All 12 numbered Sinhala titles in their original order, stored as individual
  Markdown entries in `src/content/teachings/basic-vipassana-*.md`.
- Teaching 1: YouTube video `gPPrspKHKR8`. The saved HTML confirms the numbered
  title is the video's caption, so the separate introductory embed was removed.
- Teachings 2–10: the exact MP3 URLs from each audio figure in the saved HTML,
  retaining the original uppercase `.MP3` extension.
- Teaching 11: YouTube video `09XwZp4IyqY`.
- Teaching 12: YouTube video `pz0SIUmfyqE`.
- Reference image copied from the saved page assets to
  `public/images/vidasun-maga.png`, now served locally.
- The page path `/basic-vipassana/`; no page redirect is needed.

All entries now have their own player. None require a fallback link to the old
WordPress page. Audio uses `preload="none"` to avoid fetching all recordings on
page load. A direct file link provides access outside the embedded player.

## Remaining work before retiring GoDaddy hosting

The nine MP3 files still load from
`https://valagamba.net/wp-content/dhamma/basic-vipassana/`.
Copy them to permanent media storage, verify their integrity, and update each
`audioUrl`. Preserve or redirect the old audio URLs and the original reference
image URL before switching the production domain.

The saved HTML confirms the media mapping; external file availability and actual
audio/video playback still need browser verification. Other categories and the
home page's hero image also still depend on GoDaddy.
