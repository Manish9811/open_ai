'use client'
import { createContext, useState } from "react"

export const GlobalContextProvider = createContext();

const GlobalContext = ({children}) => {
    const [aiAns,setAiAns] = useState(null);
    const [loading,setLoading] = useState(null)

  return (
    <GlobalContextProvider.Provider value={{aiAns,setAiAns,loading,setLoading}}>
        {children}
    </GlobalContextProvider.Provider>
  )
}

export default GlobalContext