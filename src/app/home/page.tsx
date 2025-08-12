import React from "react"
import HomePageScreen from "../ui/homePage"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home Page',
};

export default function HomePage(){
    return(
        <>
            <HomePageScreen/>
        </>
    )
}