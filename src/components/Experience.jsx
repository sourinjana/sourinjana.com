import './Experience.css'

const BULLETS = [
  'Developed high-performance cross-platform mobile applications using Flutter and React Native for Android and iOS, integrating REST APIs and backend services for scalable, reliable solutions.',
  'Built reusable, maintainable UI components using MVVM and Clean Architecture, with structured state management via React Hooks, Context API, Redux, and GetX.',
  'Integrated REST APIs and Firebase services — Authentication, Firestore/Realtime Database, and FCM push notifications — for seamless data flow and real-time engagement.',
  'Managed app deployment on Google Play Store and Apple App Store, including build generation, signing, certificates, provisioning profiles, and Agile collaboration via Git.',
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title"><span className="num">02</span> Experience</h2>
        <div className="exp-card card">
          <div className="exp-head">
            <div>
              <h3 className="exp-role">Software Developer</h3>
              <p className="exp-company">Arisu App Solutions Pvt Ltd</p>
            </div>
            <div className="exp-meta mono">
              <span className="status-dot" /> Dec 2024 — Present
              <br />Kolkata, India
            </div>
          </div>
          <ul className="exp-list">
            {BULLETS.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
