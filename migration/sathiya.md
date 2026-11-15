# Sathiya migration

Source: https://valagamba.net/sathiya/

Imported from `~/Desktop/dhamma/site/html/sathiya.html`. An unmodified source
copy is retained in the Git-ignored `backups/sathiya.html`.

- Both teachings preserved in source order, with titles taken from each audio
  figure's caption and the exact recording URL from the same figure.
- Individual content files: `src/content/teachings/sathiya-01.md` and
  `src/content/teachings/sathiya-02.md`.
- Existing `/sathiya/` path retained and homepage category linked locally.
- Uses the shared `src/layouts/TeachingCollection.astro` layout.
- These recordings also appear in the Vipassana Dhamma collection. Both pages
  reference the same original MP3 URLs; no audio files were duplicated.

## Before production cutover

The two recordings still load from GoDaddy at `/wp-content/dhamma/7.mp3` and
`/wp-content/dhamma/24.mp3`. Copy the files to permanent media storage, verify
integrity, and update their references in both collections. Preserve or redirect
their old URLs. The generated titles and player associations are checked against
the saved HTML; live playback still needs browser verification.
