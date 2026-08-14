export interface PodcastAppearance {
  showName: string;
  episode: string;
  url: string;
  /** Episode publish date (ISO), taken from the show's feed. Orders guest appearances. */
  date?: string;
}

export const coHostShows: PodcastAppearance[] = [
  {
    showName: 'Chad and Reeds Podcast',
    episode: 'Co-Host',
    url: 'https://pod.link/aHR0cHM6Ly9zZXJ2ZS5wb2Rob21lLmZtL3Jzcy83YzZmNzg3NS0yYjczLTQ5MWUtYjMyYy1lMmM4ZDZlOTFkNTM',
  },
  {
    showName: 'Into The Doerfel-Verse',
    episode: 'Co-Host',
    url: 'https://pod.link/aHR0cHM6Ly93d3cuZG9lcmZlbHZlcnNlLmNvbS9mZWVkcy9pbnRvdGhlZG9lcmZlbHZlcnNlLnhtbA',
  },
];

// Rendered newest to oldest. The sort below enforces that, so a new appearance
// can be added anywhere in this array as long as it carries a `date`.
export const guestAppearances: PodcastAppearance[] = [
  {
    showName: 'Rollz Radio',
    episode: 'How Music Side Project Helps Musicians Self-Host, Own Their Data & Join the V4V Movement',
    url: 'https://pod.link/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMTJlNjJiODAvcG9kY2FzdC9yc3M/episode/YWI2Y2ZlMGEtNDMxMS00NTY5LTg1ZTAtZWFmZjliMTFlNWVh',
    date: '2026-08-10',
  },
  {
    showName: 'Pleb Chain Radio',
    episode: 'Welding the Bridge with Chad F',
    url: 'https://pod.link/1691033484/episode/MTdmM2QwMmUtOWQzOC00MjY2LWI3MmUtM2NkOTdhYTE0Njcx',
    date: '2025-12-27',
  },
  {
    showName: 'Ungovernable Misfits',
    episode: 'Confab Sovereign Podcasting with Chad F and Barry from Podhome',
    url: 'https://pod.link/1491067458/episode/NGVkYWI3ZDQtMDNlOC00MWMwLWJmODMtNTdjMjI5OWQ3NDQ1',
    date: '2025-12-22',
  },
  {
    showName: 'Homegrown Hits',
    episode: 'Episode 111',
    url: 'https://pod.link/aHR0cHM6Ly9mZWVkLmhvbWVncm93bmhpdHMueHl6L2ZlZWQueG1s/episode/NDA3NWFmZjAtM2FmMi00ZmM3LWFhYzAtODAwZWQ5MjJmODMx',
    date: '2025-11-20',
  },
  {
    showName: 'Podcasting 2.0',
    episode: 'Open Source=People!',
    url: 'https://pod.link/podcasting2.0/episode/UEMyMC0yNDA?view=apps&sort=popularity',
    date: '2025-10-31',
  },
  {
    showName: 'Value for Value Roundtable',
    episode: 'Episode 3',
    url: 'https://pod.link/aHR0cHM6Ly9tdXNpYy5qaW1teXY0di5jb20vcG9kY2FzdHMvdjR2LXJvdW5kdGFibGUvdjR2cm91bmR0YWJsZS1yc3MueG1s/episode/N2M0MWViMjQtZGQzMC00YzQwLTk1NTgtNDcxODAwMDIxOWRh',
    date: '2025-08-10',
  },
  {
    showName: 'Bowl After Bowl',
    episode: 'Episode 344',
    url: 'https://pod.link/1603997338/episode/Ym93bGFmdGVyYm93bC5wb2RiZWFuLmNvbS82MTFkNDBmZi1mMTgwLTMxNzItYjY0My1mM2ViZGU3M2I0NDg',
    date: '2024-10-05',
  },
].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
