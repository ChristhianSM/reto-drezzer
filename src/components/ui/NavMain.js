import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'

export const NavMain = ({setSong}) => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const format = pathname.replace("/", "");

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/')
        setSong(search);
        setSearch("");
    }
    return (
        <div className='flex justify-between items-center'>
            <h3 className='text-2xl'>
                {
                    format.length > 1 ? format.toUpperCase() : "EXPLORA"
                }
            </h3>
            <form className = "relative mr-6 my-2" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    className="text-black shadow rounded border-0 p-2 outline-none w-64 pl-9" 
                    placeholder="Search by name of song..." 
                    value={search}
                    onChange={ (e) => {
                        setSearch(e.target.value);
                    }}
                />
                <div className="absolute text-purple-lighter top-2 left-2">
                    <FontAwesomeIcon icon= {faSearch} className ="text-black text-lg mr-3"/>
                </div>
            </form>
        </div>
    )
}
