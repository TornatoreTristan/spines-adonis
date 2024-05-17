import LogoSpines from './ui/icons/logo_spines'
import Nav from './ui/nav/nav'
import Button from './ui/cta/button'

export default function Header() {
  return (
    <>
      <header className="flex flex-justify-between flex-items-center py-5 px-20">
        <div className="w-20">
          <a href="/">
            <LogoSpines />
          </a>
        </div>
        <div>
          <Nav />
        </div>
        <div>
          <Button>Démarrer un projet</Button>
        </div>
      </header>
    </>
  )
}
