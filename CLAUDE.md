# CLAUDE.md

Personal landing page for ChadF — https://github.com/ChadFarrow/chadf-landing-page

Next.js 16.1.4 (App Router, Turbopack), React 19.2.3, TypeScript, plain CSS. No Tailwind,
no test suite. Deployed on Vercel; pushing to `main` deploys.

## Layout

Content is data, presentation is components. To add or change what the page says, edit
`data/` — the components render whatever is there and rarely need touching.

- `data/projects.ts` — `projectSections[]`, each with a title and `Project[]`. Logos live in
  `public/logos/`.
- `data/podcasts.ts` — `coHostShows[]` and `guestAppearances[]`.
- `app/page.tsx` composes the sections; `app/globals.css` holds every style (~580 lines).

## Podcast entries

**Guest appearances are always newest to oldest.** This is enforced, not conventional: each
entry carries an optional `date` (ISO), and `guestAppearances` ends in a `.sort()` by that
field descending. New entries can go anywhere in the array as long as they have a `date`.
An entry without one sorts to the bottom silently — it will not fail the build.

Co-host order is manual and intentional (Chad and Reeds Podcast first).

### pod.link URLs

Links use pod.link, which addresses a show three different ways. Existing entries use all
three, so match whichever the show already uses:

- Unpadded base64 of the feed URL — `pod.link/aHR0cHM6Ly9zZXJ2ZS5wb2Rob21lLmZt...`
- Apple Podcasts numeric ID — `pod.link/1691033484`
- pod.link slug — `pod.link/podcasting2.0`

A specific episode appends `/episode/<unpadded base64 of the episode guid>`.

### Looking up a show or episode

pod.link blocks automated fetches — curl gets HTTP 429 and WebFetch gets 403, both landing on
a Vercel bot checkpoint. Don't try to read titles from a pod.link page; go to the source:

1. Fetch the show's RSS feed directly and read `<title>` / `<pubDate>` from the matching
   `<item>`.
2. If you only have an Apple Podcasts ID, resolve the feed first:
   `curl -s "https://itunes.apple.com/lookup?id=<ID>"` → `results[0].feedUrl`.

Constructed pod.link URLs therefore can't be verified from the CLI. Say so when adding one —
they need a click on the deployed site.

## Verifying a change

`npm run build` is the real check; it runs the TypeScript check and prerenders the page.
To confirm content actually rendered, grep the build output rather than trusting the source:

```
npm run build && grep -o "Show Name" .next/server/app/index.html
```

`npx eslint .` reports 2 pre-existing `react/jsx-no-comment-textnodes` errors, from the
literal `//` in the section titles of `PodcastSection.tsx` and `ProjectSection.tsx`. They are
not blocking — `next build` does not run lint — so don't treat them as regressions from your
change. `ProjectSection` wraps the `//` in a `.comment-syntax` span; `PodcastSection`
hardcodes `// Podcasts` in the JSX.
