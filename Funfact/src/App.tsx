import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Fact = {
  id: string
  text: string
  source?: string
  source_url?: string
  language?: string
  permalink?: string
}

function App() {
  const API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
  const [fact, setFact] = useState<Fact | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFact = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: Fact = await res.json()
      setFact(data)
    } catch (e: any) {
      setError(e.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <div className="App">
      <header className="site-header">
        <h1 className="title">Fun Fact</h1>
      </header>

      {error && <p className="error">Error: {error}</p>}

      {fact && (
        <article className="fact-card">
          <p className="fact-text">{fact.text}</p>
          <p className="fact-source">
            <strong>Source:</strong>{' '}
            {fact.source ? (
              <a className="source-link" href={fact.source_url} target="_blank" rel="noreferrer">
                {fact.source}
              </a>
            ) : (
              'Unknown'
            )}
          </p>
          <p className="fact-meta">
            <small>
              ID: <span className="meta-id">{fact.id}</span> • Lang: <span className="meta-lang">{fact.language}</span>
            </small>
          </p>
        </article>
      )}

      <div className="controls">
        <button className="btn" onClick={fetchFact} disabled={loading}>
          {loading ? 'Loading…' : 'Get another fact'}
        </button>
      </div>

    </div>
  )
}

export default App
