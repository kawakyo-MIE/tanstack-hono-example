import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <section>
      <h1>構成</h1>
      <p>画面は src/routes。API は worker の /api/health。</p>
    </section>
  )
}
