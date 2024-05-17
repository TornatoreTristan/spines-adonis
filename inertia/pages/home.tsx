import { Head } from '@inertiajs/react'
import DefaultLayout from '~/layouts/default'

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Head title="Marketing IA | Générez plus de leads avec nos offres | SPINES" />
        <div className="head-hero text-white">
          <h1 className="w-70%">
            Exploitez toutes les possibilités de l’IA pour maximiser les process de votre entreprise
          </h1>
        </div>
      </DefaultLayout>
    </>
  )
}
