import { useSyncExternalStore } from 'react'

function getTheme(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'dark'
  return (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') ?? 'dark'
}

function subscribe(cb: () => void) {
  const observer = new MutationObserver(cb)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, () => 'dark' as const)
}
