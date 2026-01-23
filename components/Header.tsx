export default function Header() {
  return (
    <header>
      <h1 className="logo">
        <span className="bracket">[</span>
        <span className="name">ChadF</span>
        <span className="bracket">]</span>
      </h1>
      <div className="tagline">
        <span>
          <span className="dot lightning" /> Value4Value
        </span>
        <span>
          <span className="dot podcast" /> Podcasting 2.0
        </span>
        <span>
          <span className="dot nostr" /> Nostr
        </span>
      </div>
    </header>
  );
}
