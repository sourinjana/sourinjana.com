import './Contact.css'

export default function Contact() {
  return (
    <>
      <section id="education">
        <div className="container">
          <h2 className="section-title"><span className="num">05</span> Education</h2>
          <div className="edu-card card">
            <div>
              <h3 className="edu-degree">B.Tech, Computer Science &amp; Engineering</h3>
              <p className="edu-school">Elitte College of Engineering, Kolkata</p>
            </div>
            <div className="edu-meta mono">
              <span>2018 — 2022</span>
              <span className="tag">81.76%</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">get in touch</p>
          <h2 className="contact-title">
            Open to backend &amp; full-stack<br />opportunities.
          </h2>
          <p className="contact-sub">
            Currently building toward Java/Spring Boot roles. If that overlaps with
            what you're hiring for — or you just want to talk shop — reach out.
          </p>
          <div className="contact-links">
            <a href="mailto:janasourin2017@gmail.com" className="btn btn-primary">
              ✉ janasourin2017@gmail.com
            </a>
            <a href="tel:+918670042883" className="btn">+91-8670042883</a>
          </div>
          <div className="contact-social mono">
            <a href="https://github.com/sourinjana" target="_blank" rel="noreferrer">GitHub</a>
            <span className="dot">·</span>
            <a href="https://linkedin.com/in/sourinjana" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner mono">
          <span>© {new Date().getFullYear()} Sourin Jana</span>
          <span>built with React · deployed on GitHub Pages</span>
        </div>
      </footer>
    </>
  )
}
