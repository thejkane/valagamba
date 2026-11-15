# Vipassana Dhamma migration

Source: https://valagamba.net/vipassana-dhamma/

Imported from `~/Desktop/dhamma/site/html/vipassana-dhamma.html`; an unmodified
copy is retained in the Git-ignored `backups/vipassana-dhamma.html`.

- 23 teachings in their original source order, each in a Markdown file under
  `src/content/teachings/vipassana-dhamma-*.md`.
- Four YouTube videos, followed by 19 audio recordings (16 MP3 and three M4A).
- Titles taken from each figure's caption; media links taken from the same
  figure. Sequential numbers are navigation aids added by the replacement site.
- Original media URL capitalization and formats retained. The saved page's
  inaccurate download filenames were not used to rename or convert recordings.
- Existing `/vipassana-dhamma/` path retained and homepage category linked locally.
- Page rendered through `src/layouts/TeachingCollection.astro`, shared with the
  Basic Vipassana collection.

## Before production cutover

Audio files still load from GoDaddy. Copy the recordings to permanent media
storage, verify integrity, update `audioUrl` fields, and preserve or redirect
their old URLs. The generated page's titles and player associations are checked
against the saved HTML; live external playback still needs browser verification.

## Subsequent organization

පඹයා සහ රොබො (group 1 position 18) moved to the first position on
`/short-discussions/`. Group 1 now contains 17 lessons; group 2 retains five.
