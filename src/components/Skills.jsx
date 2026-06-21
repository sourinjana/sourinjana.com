import './Skills.css'

const GROUPS = [
  { label: 'Languages', items: ['Java', 'JavaScript', 'Dart', 'SQL', 'Python'] },
  { label: 'Frontend', items: ['React JS', 'React Native', 'Flutter'] },
  { label: 'Backend', items: ['Spring Boot', 'Spring Security', 'Hibernate/JPA', 'RESTful APIs', 'Microservices'] },
  { label: 'Core Concepts', items: ['OOP', 'Data Structures & Algorithms', 'Exception Handling', 'Multithreading', 'Design Patterns', 'JDBC'] },
  { label: 'Databases', items: ['MySQL', 'Firebase Firestore', 'Firebase Realtime DB', 'NoSQL'] },
  { label: 'DevOps & Tools', items: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Swagger'] },
  { label: 'Architecture', items: ['MVVM', 'MVC', 'Agile', 'Scrum'] },
  { label: 'Other', items: ['FCM Push Notifications', 'Bluetooth Integration', 'Razorpay', 'App Store Deployment'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title"><span className="num">04</span> Skills</h2>
        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div key={g.label} className="skill-group">
              <h4 className="skill-label mono">{g.label}</h4>
              <div className="skill-tags">
                {g.items.map((it) => <span key={it} className="tag">{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
