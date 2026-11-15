# Working on Valagamba

Read `CODEX_HANDOFF.md` at the start of a session for project context, current
lesson organization, migration status, verification limits, and next steps.
Then inspect the actual files and Git status; the repository is the source of
truth if it differs from the handoff.

- Work locally. GitHub publishing, hosting, DNS changes, and the production
  cutover have not been configured or requested as part of routine editing.
- Preserve Sinhala wording and user-approved lesson order. Display numbers are
  local to each group and are not necessarily filenames or original `order`.
- Edit content in `src/content/`, using schemas in `src/content.config.ts`.
  Reuse shared collection components rather than duplicating page layouts.
- Source HTML is normally supplied in `~/Desktop/dhamma/site/html/`. Preserve
  visible source content and exact media URLs; exclude commented-out lessons.
- Keep original source copies in the Git-ignored `backups/` directory. Keep
  large audio, video, PDFs, and credentials out of Git.
- Run `npm run build` for structural changes. Report build/static checks
  separately from browser rendering and real external-media playback checks.
- Update `CODEX_HANDOFF.md` when route status, lesson organization, hosting, or
  other significant project decisions change.
