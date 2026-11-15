# Books migration

Source: https://valagamba.net/books/

Imported from `~/Desktop/dhamma/site/html/books.html`. Unmodified source HTML
is retained in the Git-ignored `backups/books.html`.

- All 13 PDF records in source order, with original titles and source credits.
- Four English editions/works; nine Sinhala works. Language labels describe
  the editions named in the source, not the language of every word in a title.
- One Markdown file per record under `src/content/books/`, validated by the
  books collection in `src/content.config.ts`.
- Six audio explanations belong to අභිධර්මය නොවන අභිධර්මය and remain attached
  to that book, with the original page-range labels and recording URLs.
- No author credit is invented for that book, whose source entry lacks one.
- විඤ්ඤාණය has distinct title and download URLs in the source. `viewUrl` retains
  the `/wp-content/uploads/2020/04/` address and `pdfUrl` retains the
  `/wp-content/dhamma-books/` address. Both remain available.
- Books page provides title/credit search, Sinhala/English filters, PDF links,
  source credits, and audio controls. All records remain visible without JS.
- Homepage books button and shared header now link to local `/books/`.

## Before production cutover

PDFs and recordings still load from GoDaddy. Copy them to permanent media
storage, verify integrity, update content URLs, and preserve or redirect old
addresses, including both විඤ්ඤාණය link variants. Cross-origin PDF download
behavior is browser-dependent: a download link may open the PDF viewer, which
also provides saving. Live PDF availability and audio playback need browser
verification. Generated records and links are checked against the source HTML.
