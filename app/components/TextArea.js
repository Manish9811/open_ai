'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import ScrollToBottom from 'react-scroll-to-bottom'
import { GlobalContextProvider } from '../context/globalContext'

const TextArea = () => {
  const {aiAns,setAiAns} = useContext(GlobalContextProvider);
  const {loading,setLoading} = useContext(GlobalContextProvider)

  return (
    <div className='absolute  w-[100%] h-[80%] top-0 flex items-center justify-center'>
      {loading && <p className='blink 1s step-start infinite'>Thinking...</p>}
        <div className=' max-h-[90%] w-[80%] text-black p-5 min-h-[20%] overflow-scroll scrollbar-hide'>
            <Typewriter key={aiAns} typeSpeed={20} words={[aiAns]}/>
        </div>
        
    </div>
  )
}

export default TextArea