import './Nav.css'

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand mono">
          sourin<span className="nav-brand-dot">.</span>jana
        </a>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="mono">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/SourinJana_Resume.pdf"
          className="btn nav-resume"
          download
        >
          ↓ resume
        </a>
      </div>
    </header>
  )
}
