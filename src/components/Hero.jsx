import { useEffect, useState } from 'react'
import './Hero.css'

const LINES = [
  { cmd: 'whoami', out: 'sourin jana — software developer' },
  { cmd: 'cat role.txt', out: 'mobile dev by day (Flutter + React Native) · backend builder by drive (Java + Spring Boot)' },
  { cmd: 'status --current', out: 'compiling a career shift into backend engineering...' },
]

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState('cmd') // 'cmd' | 'out' | 'done'
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setPhase('done')
      return
    }
    const current = LINES[lineIndex]
    const target = phase === 'cmd' ? current.cmd : current.out

    if (charIndex < target.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), phase === 'cmd' ? 38 : 14)
      return () => clearTimeout(t)
    }

    if (phase === 'cmd') {
      const t = setTimeout(() => {
        setPhase('out')
        setCharIndex(0)
      }, 250)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setHistory((h) => [...h, current])
      setLineIndex((i) => i + 1)
      setPhase('cmd')
      setCharIndex(0)
    }, 450)
    return () => clearTimeout(t)
  }, [charIndex, phase, lineIndex])

  const current = LINES[lineIndex]

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">portfolio · 2026</p>
          <h1 className="hero-title">
            Building reliable software,<br />one platform at a time.
          </h1>
          <p className="hero-sub">
            Software Developer with 1.5+ years shipping cross-platform mobile apps in
            Flutter and React Native — now compiling a deliberate move into Java &amp;
            Spring Boot backend engineering.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View projects →</a>
            <a href="#contact" className="btn">Get in touch</a>
          </div>
          <div className="hero-meta mono">
            <span>📍 Kolkata, India</span>
            <span className="dot">·</span>
            <a href="https://github.com/sourinjana" target="_blank" rel="noreferrer">github.com/sourinjana</a>
            <span className="dot">·</span>
            <a href="https://linkedin.com/in/sourinjana" target="_blank" rel="noreferrer">linkedin.com/in/sourinjana</a>
          </div>
        </div>

        <div className="terminal" role="img" aria-label="Terminal animation introducing Sourin Jana">
          <div className="terminal-bar">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
            <span className="terminal-title mono">sourin@kolkata:~</span>
          </div>
          <div className="terminal-body mono">
            {history.map((h, i) => (
              <div key={i} className="term-line">
                <div><span className="prompt">$</span> {h.cmd}</div>
                <div className="term-out">{h.out}</div>
              </div>
            ))}
            {phase !== 'done' && current && (
              <div className="term-line">
                {phase === 'cmd' ? (
                  <div>
                    <span className="prompt">$</span> {current.cmd.slice(0, charIndex)}
                    <span className="cursor">▍</span>
                  </div>
                ) : (
                  <>
                    <div><span className="prompt">$</span> {current.cmd}</div>
                    <div className="term-out">
                      {current.out.slice(0, charIndex)}
                      <span className="cursor">▍</span>
                    </div>
                  </>
                )}
              </div>
            )}
            {phase === 'done' && (
              <div className="term-line">
                <span className="prompt">$</span> <span className="cursor">▍</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
