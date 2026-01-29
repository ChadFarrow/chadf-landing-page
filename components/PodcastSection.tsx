import { coHostShow, guestAppearances, PodcastAppearance } from '@/data/podcasts';

function PodcastCard({ podcast }: { podcast: PodcastAppearance }) {
  return (
    <a href={podcast.url} target="_blank" rel="noopener noreferrer" className="podcast-card">
      <span className="podcast-show">{podcast.showName}</span>
      <span className="podcast-episode">{podcast.episode}</span>
    </a>
  );
}

export default function PodcastSection() {
  return (
    <section className="podcast-section">
      <h2 className="section-title">// Podcasts</h2>

      <h3 className="podcast-subsection-title">Co-Host</h3>
      <div className="podcasts-grid podcasts-grid-single">
        <PodcastCard podcast={coHostShow} />
      </div>

      <h3 className="podcast-subsection-title">Guest Appearances</h3>
      <div className="podcasts-grid">
        {guestAppearances.map((podcast) => (
          <PodcastCard key={podcast.url} podcast={podcast} />
        ))}
      </div>
    </section>
  );
}
