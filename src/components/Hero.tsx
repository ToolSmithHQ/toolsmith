export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="badge">
          <span className="badge-dot" />
          Image Smith is live on the App Store
        </div>
        <h1>
          Your files never leave<br />
          <span className="gradient">your device.</span>
        </h1>
        <p>
          Open-source, offline-first tools for images, PDFs, audio &amp; video.
          Everything runs locally — no uploads, no servers, no tracking.
        </p>

        <div className="trust-row">
          <div className="trust-pill">
            <span className="icon">&#x1F512;</span> 100% Offline
          </div>
          <div className="trust-pill">
            <span className="icon">&#x1F310;</span> Open Source
          </div>
          <div className="trust-pill">
            <span className="icon">&#x1F6AB;</span> No Signup
          </div>
          <div className="trust-pill">
            <span className="icon">&#x267E;&#xFE0F;</span> Unlimited Use
          </div>
        </div>
      </div>
    </section>
  )
}
