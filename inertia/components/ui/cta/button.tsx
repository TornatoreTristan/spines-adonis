import { router } from '@inertiajs/react'

interface ButtonProps {
  children: React.ReactNode
  link: string
}

export default function Button({ children, link }: ButtonProps) {
  const handleClick = () => {
    router.get(link)
  }

  return (
    <>
      <button onClick={handleClick} className="py-2 px-4 bg-white rounded font-bold">
        {children}
      </button>
    </>
  )
}
