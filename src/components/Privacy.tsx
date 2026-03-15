import { PRIVACY_POINTS } from '../config'

export function Privacy() {
  return (
    <section id="privacy" className="privacy">
      <div className="container">
        <div className="privacy-card">
          <h2>Privacy isn't a feature — it's the architecture.</h2>
          <p>
            Every Toolsmith app processes files locally using WebAssembly and native code.
            There are no servers to hack because your data never leaves your device.
          </p>
          <div className="privacy-grid">
            {PRIVACY_POINTS.map((item) => (
              <div key={item.title} className="priv-item">
                <div className="priv-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
