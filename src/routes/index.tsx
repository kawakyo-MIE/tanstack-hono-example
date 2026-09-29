import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [body, setBody] = useState('')
  const [pending, setPending] = useState(false)

  async function loadHealth() {
    setPending(true)
    try {
      const response = await fetch('/api/health')
      const text = await response.text()
      if (!response.ok) throw new Error(text)
      setBody(JSON.stringify(JSON.parse(text), null, 2))
    } catch {
      setBody('状態を取得できませんでした。もう一度押してください。')
    } finally {
      setPending(false)
    }
  }

  return (
    <section>
      <h1>ホーム</h1>
      <p>Worker の応答をここに表示します。</p>
      <button type="button" onClick={() => void loadHealth()} disabled={pending}>
        {pending ? '取得しています' : '状態を取得'}
      </button>
      <pre className={body ? undefined : 'is-empty'} aria-live="polite">
        {body || 'まだ取得していません'}
      </pre>
    </section>
  )
}
