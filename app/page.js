'use client'
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'
import TextArea from "./components/TextArea";
import Footer from "./components/Footer";
import GlobalContext from "./context/globalContext";
import { useEffect } from "react";
import axios from "axios";


export default function Home() {

  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

     <GlobalContext>
      <TextArea />

      <div className="absolute top-2 left-2 flex items-center justify-center">
      <Image src='/logo.png' width={30} height={30} alt="logo" />
      <p className="pl-2"> ChatGPT</p> 
      <span className="pl-2 text-sm"> Powered By Manish Pokhrel </span>
      </div>

      <Footer />
      </GlobalContext> 
    </div>
  );
}
