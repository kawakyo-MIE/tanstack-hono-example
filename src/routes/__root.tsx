import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  return (
    <div className="frame">
      <nav aria-label="ページ">
        <Link to="/" activeOptions={{ exact: true }}>
          ホーム
        </Link>
        <Link to="/about">構成</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

function NotFound() {
  return (
    <section>
      <h1>ページがありません</h1>
      <p>このアドレスには画面がありません。</p>
      <Link to="/" className="text-link">
        ホームへ戻る
      </Link>
    </section>
  )
}
