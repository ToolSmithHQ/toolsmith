import { UPCOMING_TOOLS } from '../config'
import { ToolCard } from './ToolCard'

export function ToolsComingSoon() {
  return (
    <section id="tools" className="coming-soon">
      <div className="container">
        <div className="section-header">
          <h2>More tools on the way</h2>
          <p>Same philosophy — powerful, private, and runs right on your device.</p>
        </div>

        <div className="grid">
          {UPCOMING_TOOLS.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
