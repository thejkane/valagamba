# Vipassana through Abhidhamma migration

Combined destination: `/vidarshana-using-abhidhamma/`.

Imported from the two matching HTML files in `~/Desktop/dhamma/site/html/`.
Unmodified source copies are retained in the Git-ignored `backups/` directory.

## Groups

1. `malawa-1`: all nine lessons from
   `https://valagamba.net/vidarshana-using-abhidhamma/`, preserving source order:
   YouTube introduction `D_8f3eaO5R8`, followed by eight MP3 discussions.
2. `malawa-2`: all six lessons from
   `https://valagamba.net/vidarshana-using-abhidhamma2/`, preserving source order:
   five MP4 recordings, followed by YouTube video `rhxkNFdDVS0`.

Each caption and media URL is taken from the same source figure. Exact URL case
is preserved, including the lowercase `6-lesson.mp3` in group 1 and mixed MP4
extensions in group 2. The second source's video-file download icons say "Audio";
the replacement correctly treats those links as video files.

Content files retain their original source slug as the filename prefix. All use
the `vidarshana-using-abhidhamma` series, with `lessonGroup` and `groupOrder`
controlling group membership and sequence. Numbering restarts at 1 in each group.
Both groups start expanded, with independent scrolling and collapse controls.

The homepage includes a new study category titled අභිධර්මය තුලින් විදර්ශනාව.

## Before production cutover

Copy eight MP3 and five MP4 files from GoDaddy to permanent media storage,
verify integrity and playback, update content references, and preserve or redirect
old media URLs. Redirect the second source page to the second group on the
combined page; the intended mapping is recorded in `url-map.csv`.
Actual external media playback still needs browser verification.
