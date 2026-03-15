import { SITE } from '../config'
import { useTheme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  const theme = useTheme()
  return (
    <nav>
      <div className="inner">
        <div className="logo">
          <img src={theme === 'dark' ? '/ts.svg' : '/ts-dark.svg'} alt="Toolsmith" className="logo-img" />
          {SITE.name}
        </div>
        <div className="nav-links">
          <a href="#tools" className="nav-link">Tools</a>
          <a href="#privacy" className="nav-link">Privacy</a>
          <a href={SITE.github} className="nav-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
