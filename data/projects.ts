export type AccentColor = 'lightning' | 'nostr' | 'podcast';
export type BadgeType = 'live' | 'template' | 'bot' | 'bridge' | 'starter' | 'reference';

export interface Project {
  name: string;
  description: string;
  url: string;
  github?: string;
  icon: string;
  image?: string;
  badge?: BadgeType;
  tech: string[];
  accent: AccentColor;
}

export interface ProjectSection {
  title: string;
  projects: Project[];
}

export const projectSections: ProjectSection[] = [
  {
    title: '// Apps & Platforms',
    projects: [
      {
        name: 'StableKraft',
        description: 'Music discovery & streaming from podcast feeds with V4V Lightning payments, Nostr auth, and curated playlists.',
        url: 'https://stablekraft.app',
        github: 'https://github.com/ChadFarrow/stablekraft-app',
        icon: '🎵',
        image: '/logos/stablekraft.webp',
        badge: 'live',
        tech: ['Next.js', 'Nostr', 'Lightning', 'PWA'],
        accent: 'podcast',
      },
      {
        name: 'ITDV-Lightning',
        description: 'Lightning-powered V4V music platform showcasing DoerfelVerse artists. Auto-boost, boostagrams, and Nostr integration.',
        url: 'https://itdv.podtards.com',
        github: 'https://github.com/ChadFarrow/ITDV-Lightning',
        icon: '⚡',
        image: '/logos/itdv.jpg',
        badge: 'live',
        tech: ['Next.js', 'Bitcoin Connect', 'WebLN'],
        accent: 'lightning',
      },
      {
        name: 'MSP 2.0',
        description: 'Music Side Project Studio - RSS feed editor for creating Podcasting 2.0 music albums and publisher catalogs with V4V support.',
        url: 'https://new.musicsideproject.com',
        github: 'https://github.com/ChadFarrow/MSP-2.0',
        icon: '🎚️',
        image: '/logos/msp.png',
        badge: 'live',
        tech: ['React', 'Nostr', 'RSS'],
        accent: 'podcast',
      },
    ],
  },
  {
    title: '// Bots & Bridges',
    projects: [
      {
        name: 'Helipad-to-Nostr',
        description: 'Webhook receiver connecting Helipad payments to Nostr. Auto-posts boosts with daily/weekly summaries and music show support.',
        url: 'https://primal.net/p/npub17w7592g67helr3qv53ddyf55vj4hnxttxtd8368d92u3zyds3ejs0x40jx',
        github: 'https://github.com/ChadFarrow/Helipad-to-Nostr-BoostBot',
        icon: '🚁',
        image: '/logos/helipad.jpg',
        badge: 'bot',
        tech: ['TypeScript', 'Helipad', 'Nostr'],
        accent: 'lightning',
      },
      {
        name: 'LIT_Bot',
        description: 'Live podcast notifications via PodPing to Nostr. Monitors the podcast ecosystem and broadcasts when shows go live.',
        url: 'https://primal.net/p/npub1plvtjgx7uhujg853ceq20mup5rj7v243pnlkakz4n5qhk6jxsphqu7kcz5',
        github: 'https://github.com/ChadFarrow/LIT_Bot',
        icon: '📡',
        image: '/logos/litbot.png',
        badge: 'bot',
        tech: ['Nostr', 'PodPing', 'TypeScript'],
        accent: 'nostr',
      },
      {
        name: 'LibreRelayBot',
        description: 'IRC-to-Nostr bridge for #SirLibre channel. Monitors and forwards messages in real-time.',
        url: 'https://primal.net/p/npub17pguadnuq8t9umtpdrumkntkygkyg58g2atujwf3454ux9ktc89st95h5r',
        github: 'https://github.com/ChadFarrow/LibreRelayBot',
        icon: '🔗',
        image: '/logos/libre.jpg',
        badge: 'bridge',
        tech: ['Node.js', 'IRC', 'Nostr'],
        accent: 'nostr',
      },
      {
        name: 'BoostAfterBoost',
        description: 'IRC-to-Nostr bridge for #BowlAfterBowl channel. Real-time message forwarding to Nostr relays.',
        url: 'https://primal.net/p/npub1fzu692tz2hmty5ljlm0lhm42cx7uu5z3m2j5dvvclqqvk4f4aq8qrctd0g',
        github: 'https://github.com/ChadFarrow/BoostAfterBoost',
        icon: '🔗',
        image: '/logos/boostafterboost.jpg',
        badge: 'bridge',
        tech: ['Node.js', 'IRC', 'Nostr'],
        accent: 'nostr',
      },
      {
        name: 'BoostBot-Starter',
        description: 'Simplified starter for auto-sharing Podcasting 2.0 boosts to Nostr. Quick setup with Helipad webhook integration.',
        url: 'https://github.com/ChadFarrow/BoostBot-Starter',
        github: 'https://github.com/ChadFarrow/BoostBot-Starter',
        icon: '🚀',
        badge: 'starter',
        tech: ['Node.js', 'Helipad', 'Nostr'],
        accent: 'podcast',
      },
      {
        name: 'RSS Music Site',
        description: 'GitHub template for V4V music platforms. Deploy your own Lightning-powered music site with one click.',
        url: 'https://rss-music-site.vercel.app/',
        github: 'https://github.com/ChadFarrow/RSS-music-site-template',
        icon: '📦',
        badge: 'template',
        tech: ['Next.js', 'Vercel', 'Template'],
        accent: 'nostr',
      },
      {
        name: 'MusicL Playlists',
        description: 'Self-hosted MusicL playlist using Podcasting 2.0 music medium tags. Static documentation and playlist assets.',
        url: 'https://github.com/ChadFarrow/chadf-musicl-playlists',
        github: 'https://github.com/ChadFarrow/chadf-musicl-playlists',
        icon: '🎶',
        badge: 'reference',
        tech: ['Podcasting 2.0', 'MusicL'],
        accent: 'lightning',
      },
    ],
  },
];
