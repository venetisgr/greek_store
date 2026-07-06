# LESSONS

<!-- One lesson per entry, one-line summary first. Corrections and
     confirmed approaches both. Don't duplicate what the repo or chat
     history already records; update entries rather than adding twins;
     remove entries proven wrong. Check before non-trivial attempts. -->

## Images pasted in chat never reach the filesystem
- What happened: the user shared tin-label artwork in chat twice; a disk-wide
  search for recent image files found nothing to place in `public/images/`.
- Why it mattered: "use these images" can only be honored for their *content*
  (text, palette, motifs) unless the files are committed to the repo.
- Do instead: transcribe text/design cues immediately, and ask the user to
  upload the files to `public/images/` via GitHub; keep `image: null` hooks in
  `src/data/products.ts` ready to light up when files arrive.
