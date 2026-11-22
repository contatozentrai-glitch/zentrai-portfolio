export function SectionHeading({ id, label, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span aria-hidden="true" />{label}</p>
      <h2 id={id}>{children}</h2>
    </div>
  );
}
