export function Item({ children, title, link }) {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        className="footer-item"
        rel="noopener noreferrer"
      >
        {children}
        <span>{title}</span>
      </a>
    );
  } else {
    return (
      <div className="footer-item">
        {children}
        <span>{title}</span>
      </div>
    );
  }
}
