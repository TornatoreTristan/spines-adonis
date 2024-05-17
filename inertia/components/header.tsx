import LogoSpines from './ui/icons/logo_spines'
import Nav from './ui/nav/nav'
import Button from './ui/cta/button'

export default function Header() {
  return (
    <>
      <header className="flex flex-justify-between flex-items-center py-5">
        <div className="w-30%">
          <a href="/">
            <LogoSpines width={100} />
          </a>
        </div>
        <div>
          <Nav />
        </div>
        <div className="w-30% flex flex-justify-end">
          <Button link="/contact/">Démarrer un projet</Button>
        </div>
      </header>
    </>
  )
}
