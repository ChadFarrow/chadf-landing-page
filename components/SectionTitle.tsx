/**
 * Section heading in the site's code-comment style: an accented `//` followed
 * by the title. Keeping the `//` here rather than in the title strings means the
 * data holds plain names, and the accent markup stays consistent across sections.
 */
export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="section-title">
      <span className="comment-syntax">{'//'}</span> {children}
    </h2>
  );
}
