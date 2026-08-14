import { coHostShows, guestAppearances, PodcastAppearance } from '@/data/podcasts';
import SectionTitle from './SectionTitle';

function PodcastCard({ podcast }: { podcast: PodcastAppearance }) {
  return (
    <a href={podcast.url} target="_blank" rel="noopener noreferrer" className="podcast-card">
      <span className="podcast-show">{podcast.showName}</span>
      <span className="podcast-episode">{podcast.episode}</span>
    </a>
  );
}

// A lone card in a full-width auto-fill grid stretches oddly, so a
// one-entry list gets the narrower single-column treatment.
function PodcastSubsection({ title, podcasts }: { title: string; podcasts: PodcastAppearance[] }) {
  return (
    <>
      <h3 className="podcast-subsection-title">{title}</h3>
      <div className={`podcasts-grid${podcasts.length === 1 ? ' podcasts-grid-single' : ''}`}>
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.url} podcast={podcast} />
        ))}
      </div>
    </>
  );
}

export default function PodcastSection() {
  return (
    <section className="podcast-section">
      <SectionTitle>Podcasts</SectionTitle>
      <PodcastSubsection title="Co-Host" podcasts={coHostShows} />
      <PodcastSubsection title="Guest Appearances" podcasts={guestAppearances} />
    </section>
  );
}
