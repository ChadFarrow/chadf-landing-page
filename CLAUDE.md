# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal landing page for ChadF. Next.js 16.1.4 (App Router, Turbopack), React 19.2.3,
TypeScript, plain CSS. No Tailwind. Deployed on Vercel; pushing to `main` deploys.

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # production build — runs the TypeScript check and prerenders
npm run lint     # eslint (see caveat below)
```

There is no test suite. `npm run build` is the real verification: it type-checks and
statically prerenders the whole page, so a bad data edit fails here.

To confirm content actually rendered, grep the prerendered output rather than trusting the
source edit:

```bash
npm run build && grep -o "Show Name" .next/server/app/index.html
```

`npm run lint` is clean. Note that `next build` does not run lint, so a lint regression will
not fail the build — run it separately.

## Architecture

Content is data, presentation is components. Everything the page says lives in `data/`; the
components render whatever is there and rarely need touching. `app/page.tsx` composes the
sections in order.

**A card's color comes from `badge`.** `ProjectCard` puts `project.badge`
directly into the card's className, and `app/globals.css` keys the `--accent-color` custom
property off that class (`.project-card.bot { --accent-color: var(--lightning); }`). So the
six `BadgeType` values in `data/projects.ts` must stay in sync with the six
`.project-card.*` rules in the CSS — adding a badge type without a matching CSS rule yields
an uncolored card, and TypeScript won't catch it.

**Section headings go through `SectionTitle`.** It owns the accented `//` prefix, so titles
in `data/projects.ts` are plain names (`'Apps'`, not `'// Apps'`). The literal must stay
written as `{'//'}` — a bare `//` in JSX trips `react/jsx-no-comment-textnodes`.

`app/globals.css` (~530 lines) holds every style, including a small token palette at the top
(`--lightning`, `--nostr`, `--podcast` plus matching `--glow-*`).

## Podcast entries

**Guest appearances are always newest to oldest.** This is enforced, not conventional: each
entry carries an optional `date` (ISO), and `guestAppearances` ends in a `.sort()` by that
field descending. New entries can go anywhere in the array as long as they have a `date`.
An entry without one sorts to the bottom silently — it will not fail the build.

Co-host order is manual and intentional (Chad and Reeds Podcast first).

### pod.link URLs

Links use pod.link, which addresses a show three different ways. Existing entries use all
three, so match whichever form the show already uses:

- Unpadded base64 of the feed URL — `pod.link/aHR0cHM6Ly9zZXJ2ZS5wb2Rob21lLmZt...`
- Apple Podcasts numeric ID — `pod.link/1691033484`
- pod.link slug — `pod.link/podcasting2.0`

A specific episode appends `/episode/<unpadded base64 of the episode guid>`.

### Looking up a show or episode

pod.link blocks automated fetches — curl gets HTTP 429 and WebFetch gets 403, both landing on
a Vercel bot checkpoint. Don't try to read titles off a pod.link page; go to the source:

1. Fetch the show's RSS feed directly and read `<title>` / `<pubDate>` from the matching
   `<item>`.
2. If you only have an Apple Podcasts ID, resolve the feed first:
   `curl -s "https://itunes.apple.com/lookup?id=<ID>"` → `results[0].feedUrl`.

Constructed pod.link URLs therefore can't be verified from the CLI. Say so when adding one —
they need a click on the deployed site.
