import { SITE } from '../config'

export function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name} &middot;{' '}
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </p>
      </div>
    </footer>
  )
}
