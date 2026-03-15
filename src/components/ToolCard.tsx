import type { Tool } from '../config'

export function ToolCard({ name, icon, description, colorClass }: Tool) {
  return (
    <div className={`tool-card ${colorClass}`}>
      <div className="card-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="coming-tag">Coming Soon</span>
    </div>
  )
}
