import Image from 'next/image'
import Link from 'next/link';
import { Suspense } from 'react';

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ImgSkeleton(){
    return <Image src="/window.svg" alt="Carregando..." width={500} height={500}/>
}

async function Img(){
    await wait(3000);
    return (
        <Link href="/cube">
            <Image src="/pexels.jpg" alt="Imagem" width={1000} height={1000}/>
        </Link>
    )
}

export default function HomePageScreen(){
    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <Suspense fallback={ImgSkeleton()}>
                    <Img/>
                </Suspense>
            </div>
        </>
    ) 
}