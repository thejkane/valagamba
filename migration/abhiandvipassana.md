# Abhidhamma and Vipassana migration

Source: https://valagamba.net/abhiandvipassana/

Imported from `~/Desktop/dhamma/site/html/abhiandvipassana.html`; unmodified
HTML is archived in the Git-ignored `backups/abhiandvipassana.html`.

- 11 visible lessons in source order: seven MP4 lessons, then four Patthana
  audio lessons. Five MP4 lessons also retain their separate MP3 audio links.
- Content: `src/content/teachings/abhiandvipassana-*.md`.
- Source caption numbering is removed from titles to avoid duplicate numbering
  alongside the site's sequential lesson labels. The source's lesson 6 is
  commented out and remains unpublished; later lessons keep their source order.
- Exact media URLs are retained, including the unusual `NamaRupaVideo-5.mp3`
  audio link. Its inaccurate download filename is not reused. This audio URL
  must be checked for availability; no replacement URL has been guessed.
- Lessons 7 and 8 in the source have video-file links, not separate audio links;
  the new page offers video-file access without inventing audio recordings.
- Shared collection layout now supports `videoUrl`, with native video controls,
  inline playback, no preloading, optional accompanying audio, and direct file
  links. Starting native audio/video pauses other native players.
- Homepage links locally; lesson navigation scrolls vertically.

## Before production cutover

All MP4 and MP3 files still load from GoDaddy. Copy them to permanent storage,
verify integrity and playback, update their content URLs, and preserve or redirect
old media URLs. Generated titles and media associations have been checked against
the saved HTML. Actual live playback still needs browser verification.

## Subsequent organization

The four Patthana audio lessons (previous display positions 08–11) have moved to
`/abhidhamma-deshana/#patthana`. Their files are now `patthana-01.md` through
`patthana-04.md`. This collection now displays only the seven video lessons.
Original source URLs and audio recording URLs remain unchanged.
