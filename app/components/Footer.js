'use client'
import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { GlobalContextProvider } from '../context/globalContext';
import axios from 'axios';


const Footer = () => {
    const { aiAns, setAiAns } = useContext(GlobalContextProvider);
    const [userSearch, setUserSearch] = useState("");
    const { loading, setLoading } = useContext(GlobalContextProvider);

    const searchActive = async () => {
        setLoading(true);
        setAiAns('');

        try {

            const data = await axios.post('https://open-ai-three-eta.vercel.app/api/OpenAi', {
                question: userSearch
            });
            console.log(data)
            setAiAns('')
            if (!data.data.message) alert("no data found")
            setAiAns(data.data.message);
            setLoading(false)

        }
        catch (e) {
            console.log(e);
            setLoading(false)

        }
        finally{
        }


    }
    return (
        <div className='absolute bottom-0 w-full left-0 h-40 flex items-center justify-center'>
            <FaRegFile className='mr-5' size={30} />

            <div className='flex w-80 h-15 border-1 border-grey items-center justify-between p-2 rounded-2xl'>
                <input onChange={(e) => setUserSearch(e.target.value)} value={userSearch} className='w-60 outline-0' placeholder='search anything you want....' />
                <FaSearch size={30} opacity={.4} onClick={searchActive} />


            </div>
        </div>
    )
}

export default Footer
