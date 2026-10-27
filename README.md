# BMIC 2026 · Shot breakdown

A static site of the scripted-moment shot book for the BMIC 2026 Grand Finals, in the "For the Crown" key-visual look. Plain HTML, CSS and JavaScript with no framework and no dependencies.

## Deploy on Vercel

1. Push this folder to a GitHub repo, or run `vercel` inside it.
2. In Vercel, import the repo. `vercel.json` already sets everything:
   - Build command: `node build-manifest.js`
   - Output directory: `.`
3. Every push redeploys and refreshes the list of media.

## Adding stills and clips

Put files in `media/`, named after the shot, then push:

```
media/show-open-03.mp4
media/trophy-01.jpg
media/camera-layout.png
```

- Videos (`mp4`, `webm`, `mov`) loop silently in the slot; click to open full size with sound and controls.
- Images: `jpg`, `png`, `webp`, `gif`.
- If a shot has both a video and an image, the video wins.
- Keep clips short and compressed (H.264 MP4, around 1080p, under 20 MB each) so the page stays quick.
- Dropping a file onto a slot in the browser previews it locally only. It is not uploaded or saved.

To use a file with a different name, set `media` on that shot in `data.js`, for example `media: "media/opener-final-cut.mp4"`.

### Slot names

| Segment | Files |
|---|---|
| Camera layout | `camera-layout` |
| 04 Pre-show performance | `performance-01` … `performance-04` |
| 05 The trophy | `trophy-01` … `trophy-04` |
| 06 Show open | `show-open-01` … `show-open-04` |
| 07 Team walk-ins | `walk-ins-01` … `walk-ins-04` |
| 08 Match start | `match-start-01` … `match-start-04` |
| 09 Chicken dinner | `chicken-dinner-01` … `chicken-dinner-04` |
| 10 WWCD interview | `wwcd-interview-01` … `wwcd-interview-04` |
| 11 Memento reveal | `memento-01` … `memento-04` |
| 12 Breaks & day close | `breaks-01` … `breaks-04` |
| 13 Champions moment | `champions-moment-01` … `champions-moment-04` |
| 14 Awards ceremony | `awards-01` … `awards-04` |
| 15 For the crown | `champions-lap-01` … `champions-lap-04` |

Every empty slot also shows its own file name on the page.

## Editing text

All copy lives in `data.js`: cameras, seating, walk-in order and every segment's shots and cue. Segment and shot order on the page follow the order in that file.

## Previewing locally

Run `node build-manifest.js`, then serve the folder (for example `npx serve .`) and open the address it prints. Opening `index.html` straight from disk also works, but only shows media listed in the manifest.

## Key-visual artwork

The hero, closing band, placeholder texture, nation strips and stage render come from the "For the Crown" proposal and are bundled in `assets/`, so the site is self-contained.

## Printing

The Print / PDF button lays out one section per A4 page and keeps the KV colours. Turn on "Background graphics" in the print dialog.
