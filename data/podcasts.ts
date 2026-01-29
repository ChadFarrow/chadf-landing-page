export interface PodcastAppearance {
  showName: string;
  episode: string;
  url: string;
}

export const coHostShow: PodcastAppearance = {
  showName: 'Into The Doerfel-Verse',
  episode: 'Co-Host',
  url: 'https://pod.link/aHR0cHM6Ly93d3cuZG9lcmZlbHZlcnNlLmNvbS9mZWVkcy9pbnRvdGhlZG9lcmZlbHZlcnNlLnhtbA',
};

export const guestAppearances: PodcastAppearance[] = [
  {
    showName: 'Pleb Chain Radio',
    episode: 'Welding the Bridge with Chad F',
    url: 'https://pod.link/1691033484/episode/MTdmM2QwMmUtOWQzOC00MjY2LWI3MmUtM2NkOTdhYTE0Njcx',
  },
  {
    showName: 'Ungovernable Misfits',
    episode: 'Confab Sovereign Podcasting with Chad F and Barry from Podhome',
    url: 'https://pod.link/1491067458/episode/NGVkYWI3ZDQtMDNlOC00MWMwLWJmODMtNTdjMjI5OWQ3NDQ1',
  },
  {
    showName: 'Value for Value Roundtable',
    episode: 'Episode 3',
    url: 'https://pod.link/aHR0cHM6Ly9tdXNpYy5qaW1teXY0di5jb20vcG9kY2FzdHMvdjR2LXJvdW5kdGFibGUvdjR2cm91bmR0YWJsZS1yc3MueG1s/episode/N2M0MWViMjQtZGQzMC00YzQwLTk1NTgtNDcxODAwMDIxOWRh',
  },
  {
    showName: 'Bowl After Bowl',
    episode: 'Episode 344',
    url: 'https://pod.link/1603997338/episode/Ym93bGFmdGVyYm93bC5wb2RiZWFuLmNvbS82MTFkNDBmZi1mMTgwLTMxNzItYjY0My1mM2ViZGU3M2I0NDg',
  },
];
