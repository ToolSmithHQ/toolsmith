import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { AppShowcase } from './components/AppShowcase'
import { ToolsComingSoon } from './components/ToolsComingSoon'
import { Privacy } from './components/Privacy'
import { OpenSource } from './components/OpenSource'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AppShowcase />
      <ToolsComingSoon />
      <Privacy />
      <OpenSource />
      <Footer />
    </>
  )
}

export default App
