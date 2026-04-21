# ChatPandas Whitepapers

A single-page library of ChatPandas whitepapers and the Heartful CX case study. Designed to live inside the `nimrashakil.github.io` portfolio as a subfolder.

## Live URL (once deployed)

```
https://nimrashakil.github.io/whitepapers/
```

Individual PDFs are linkable too:

```
https://nimrashakil.github.io/whitepapers/pdfs/metamorphosis-of-cx-the-human-experience.pdf
https://nimrashakil.github.io/whitepapers/pdfs/dont-just-take-calls-build-connections.pdf
https://nimrashakil.github.io/whitepapers/pdfs/is-the-customer-always-right.pdf
https://nimrashakil.github.io/whitepapers/pdfs/its-a-live-why-live-chat-is-still-kick-ass.pdf
https://nimrashakil.github.io/whitepapers/pdfs/how-to-clear-a-ticket-backlog.pdf
https://nimrashakil.github.io/whitepapers/pdfs/heartful-cx-service-beyond-expectations.pdf
```

## Folder structure

```
whitepapers/
├── index.html      Single-page library (5 whitepapers + 1 case study)
├── README.md       This file
├── images/         Featured images at original resolution
│   ├── metamorphosis-of-cx.png
│   ├── build-connections.png
│   ├── customer-always-right.png
│   ├── its-a-live.png
│   ├── ticket-backlog.png
│   └── heartful-cx.png
└── pdfs/           A4, print-ready PDFs
    ├── metamorphosis-of-cx-the-human-experience.pdf
    ├── dont-just-take-calls-build-connections.pdf
    ├── is-the-customer-always-right.pdf
    ├── its-a-live-why-live-chat-is-still-kick-ass.pdf
    ├── how-to-clear-a-ticket-backlog.pdf
    └── heartful-cx-service-beyond-expectations.pdf
```

## How to deploy

Drop this whole `whitepapers/` folder into the root of the `nimrashakil.github.io` repo, commit, and GitHub Pages will serve it at the URL above within about 1–2 minutes.

## Design notes

- **Palette:** black on white, single green accent (`#2E7D32`).
- **Type:** Helvetica for UI/headers, Georgia for body and ledes, with system-font fallbacks.
- **Cards:** square (1:1) aspect for the image area so portrait and landscape featured images both display fairly. Per-card `object-position` tweaks handle specific compositions.
- **Case studies** get a subtle green top-accent stripe to distinguish them from whitepapers.

The webpage and the PDFs share the same visual language — same green accent, same typography, same ChatPandas logo treatment — so the library and the documents feel like one piece of work.
