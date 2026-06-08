import './App.css'

function App() {
  return (
    <main className="shell">
      <header className="shell-header">
        <div>
          <p className="eyebrow">Local skills discovery</p>
          <h1>Paggawa</h1>
        </div>
        <span className="environment">Project shell</span>
      </header>

      <section className="status-panel" aria-labelledby="status-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">M01</p>
            <h2 id="status-heading">Scaffold status</h2>
          </div>
          <span className="status-summary">
            <span className="status-dot" aria-hidden="true" />
            Ready
          </span>
        </div>

        <dl className="status-list">
          <div>
            <dt>Frontend</dt>
            <dd>React shell</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>ASP.NET Core API shell</dd>
          </div>
          <div>
            <dt>Data</dt>
            <dd>Decision pending</dd>
          </div>
          <div>
            <dt>Identity</dt>
            <dd>Decision pending</dd>
          </div>
        </dl>
      </section>

      <footer className="shell-footer">
        <span>No business workflows are active.</span>
        <span>Governed by ADAPT M01.</span>
      </footer>
    </main>
  )
}

export default App
