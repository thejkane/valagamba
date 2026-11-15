# Gallery migration and layout repair

Source: https://valagamba.net/gallery/

Imported from `~/Desktop/dhamma/site/html/gallery.html`; unmodified HTML is
archived in the Git-ignored `backups/gallery.html`.

## Changes

The source uses a fixed 641px carousel, cropped photos, autoplay settings, and
WordPress carousel/lightbox plugins. The replacement uses a responsive grid with
full-photo containment and a native modal viewer, without those plugins.

- All 19 saved photos copied unchanged to `public/images/gallery/`, in source
  order. Source numbering skips 19; no missing photo has been invented.
- A proportional, auto-oriented WebP thumbnail was generated for each photo
  using Sharp at up to 600px width. Original files remain unchanged.
- Metadata and source URLs are in `src/content/gallery/aranya.md`.
- Descriptive alternative text added from visual inspection, without asserting
  identities of people in the photos.
- Grid links open the saved-resolution original images directly without JS.
  With JS, they open a modal viewer with previous/next, left/right arrow keys,
  Escape (native dialog), close button, image count, and a direct full-size link.
- Native dialog traps focus; closing restores focus to the triggering image.
- Image proportions are preserved in both grid and viewer, including portraits.
- Shared navigation now links locally to `/gallery/`.

The originals here are the versions available in the browser save, some resized
by WordPress; no larger unavailable originals were downloaded or fabricated.
All displayed images and thumbnails are local, independent of GoDaddy.

## Verification

Production build and local image/link checks pass. The photo contact sheet was
visually inspected. Browser layout and actual modal interaction still need local
review because a browser preview tool is not available in this environment.

Before production cutover, preserve or redirect old image URLs and attachment
pages if they have been shared. The retained `originalUrl` fields provide the
saved image URL mappings.
