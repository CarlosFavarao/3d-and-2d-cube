import React from "react"
import SuspenseScreen from "../ui/suspenseScreen"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Imagem com suspense',
};

export default function HomePage(){
    return(
        <>
            <SuspenseScreen/>
        </>
    )
}