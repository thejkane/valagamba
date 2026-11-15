# Tribute migration

Source: https://valagamba.net/about/

Imported from `~/Desktop/dhamma/site/html/about.html`, archived unchanged in
the Git-ignored `backups/about.html`.

The original page contains an image-based Sinhala tribute, credited to
Dr. Lasitha Malalasekara. The browser-saved image is copied unchanged to
`public/images/about-tribute.png` (791 × 1024), preserving the original document.
The local page scales the image responsively and links to its full-size file.
Title, image reference, alternative description, and credit are maintained in
`src/content/pages/about.md`. No transcription or invented biography is added.
Image text remains image-based; a reviewed text transcription can be added later.

Homepage tribute link and shared header now open the local `/about/` page.
The image has no dependency on WordPress hosting. Preserve or redirect its old
image URL when switching hosting, as recorded in `url-map.csv`.
