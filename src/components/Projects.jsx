import './Projects.css'

const PROJECTS = [
  {
    name: 'Recipe Management System',
    status: 'shipped',
    desc: 'A backend-first system for recipe creation, comments, and user management — built to demonstrate production-grade Spring Boot practices, not a tutorial clone.',
    bullets: [
      'JWT-based authentication and authorization with Spring Security',
      'RESTful APIs for recipe creation, retrieval, and comment management with request validation',
      'Swagger-based API documentation for clear, testable endpoints',
      'Unit tested, version-controlled with Git, and published live on Google Play Store',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Hibernate/JPA', 'MySQL', 'AWS', 'Swagger', 'Maven'],
    links: { github: 'https://github.com/sourinjana' },
  },
  {
    name: 'Maitys Member',
    status: 'live',
    desc: 'A cross-platform healthcare app for booking home healthcare services, doctor appointments, and health products — Flutter frontend on a Spring Boot backend.',
    bullets: [
      'Razorpay payment integration for secure, reliable transactions',
      'MySQL database designed and managed through Spring Boot (MVC)',
      'API performance optimization and responsive, user-friendly Flutter UI',
      'Source code maintained and version-controlled with Git',
    ],
    stack: ['Flutter', 'Dart', 'Spring Boot', 'REST API', 'Razorpay', 'MVVM', 'MySQL', 'Git'],
    links: { github: 'https://github.com/sourinjana' },
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title"><span className="num">03</span> Projects</h2>
        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <article key={p.name} className="proj-card card">
              <div className="proj-head">
                <h3 className="proj-name">{p.name}</h3>
                <span className="tag proj-status">{p.status}</span>
              </div>
              <p className="proj-desc">{p.desc}</p>
              <ul className="proj-bullets">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="proj-stack">
                {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
              <a href={p.links.github} target="_blank" rel="noreferrer" className="proj-link mono">
                view on github →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
