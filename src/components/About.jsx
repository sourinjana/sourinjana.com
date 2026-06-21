import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title"><span className="num">01</span> About</h2>
        <div className="about-grid">
          <p className="about-text">
            I'm a software developer based in Kolkata, currently building cross-platform
            mobile applications at Arisu App Solutions — shipping production Flutter and
            React Native apps with real-time features, payment integrations, and native
            platform work across Android and iOS.
            <br /><br />
            Alongside the day job, I'm deliberately building toward backend engineering:
            Java, Spring Boot, Spring Security, Hibernate/JPA, and MySQL, applied through
            self-driven projects designed to mirror production systems — authentication,
            REST APIs, documentation, and deployment included, not left as an exercise.
          </p>
          <dl className="about-stats">
            <div>
              <dt>1.5+ yrs</dt>
              <dd>professional experience</dd>
            </div>
            <div>
              <dt>2</dt>
              <dd>platforms shipped (Play Store &amp; App Store)</dd>
            </div>
            <div>
              <dt>Java</dt>
              <dd>backend track, self-driven</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
