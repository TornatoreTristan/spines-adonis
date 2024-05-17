import Footer from '~/components/footer'
import Header from '~/components/header'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="px-30">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}
