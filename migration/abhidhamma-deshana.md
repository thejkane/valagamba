# Abhidhamma migration

Combined destination: `/abhidhamma-deshana/`.

Source HTML files are in `~/Desktop/dhamma/site/html/`. Unmodified copies of
all three files are retained in the Git-ignored `backups/` directory.

## Groups

1. අභිධර්ම සාකච්චා: five MP3 recordings from
   `https://valagamba.net/abhidhamma-dhamma/`, in source order.
2. ධම්මසංගනිප්‍රකරන: three MP3 recordings from
   `https://valagamba.net/dhammasanganiparakaran/`, in source order.

Each title and audio URL comes from the same source figure. The original parent
page has no lessons of its own. Both groups use the existing expandable layout,
start expanded, scroll independently, and number their lessons from 1.

Content files use their source group as the filename prefix; all eight belong
to the `abhidhamma-deshana` series. `groupOrder` controls the sequence within
each group. Original source page URLs remain in each entry's `originalUrl`.

The source Dhammasangani download links for lessons 2 and 3 incorrectly point
to lesson 1. The replacement's direct file links use their audio player URLs,
`dhamma-sangani2.mp3` and `dhamma-sangani3.mp3` respectively.

## Before production cutover

Copy all eight MP3s from GoDaddy to permanent media storage, verify integrity,
and update their references. Preserve or redirect their original media URLs.
The two former collection page URLs should redirect to their corresponding
group anchors on the combined page; mappings are recorded in `url-map.csv`.
Live browser playback remains to be checked.

## Patthana group

A third group, පට්ඨාන දේශනා (`patthana`), contains the four audio lessons moved
from display positions 08–11 on `/abhiandvipassana/`. Content files are
`patthana-01.md` through `patthana-04.md`, ordered 1–4 within the group. The
combined Abhidhamma page now has 12 recordings. Their original source page and
GoDaddy media URLs are preserved.
