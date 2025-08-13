import Link from "next/link"

export default function Home(){
  return (
    <>
      <div>
        <Link href="/suspense">Imagem com Suspense</Link>
      </div>
      <div>
        <Link href="/cube">Cubo</Link>
      </div>
    </>
  )
}