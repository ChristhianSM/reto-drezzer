import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faUser, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import React from 'react'


export const Sidebar = () => {
  return (
    <div className='h-full bg-zinc-800 p-10'>
        <div className='fixed'>
            <div className='flex items-center'>
                <FontAwesomeIcon icon= {faMusic} className ="text-2xl text-orange-600 mr-3"/>
                <h2 className='text-3xl'>MUSICAPP</h2>
            </div>

            <div className='my-7 flex items-center'>
                <FontAwesomeIcon icon= {faUser} className ="text-5xl mr-3"/>
                <div >
                    <h2>Christhian Silupú</h2>
                    <p className='text-sm'>Apasionado por la musica</p>
                </div>
            </div>

            <div className='my-7'>
                <h3 className='mb-5 text-lg text-'>Explorar Música</h3>
                <div>
                    <Link to="/">
                        <button className='cursor-pointer mb-3 text-gray-400 block'>
                            <FontAwesomeIcon icon= {faHouse} className = "mr-2"/>
                            Inicio
                        </button>
                    </Link>
                    <Link to="/artists">
                        <button className='cursor-pointer mb-3 text-gray-400 block'>
                            <FontAwesomeIcon icon= {faUsers} className = "mr-2"/>
                            Artistas</button>
                    </Link>
                    <Link to="/albums">
                        <button className='cursor-pointer mb-3 text-gray-400 block'>
                            <FontAwesomeIcon icon= {faHouse} className = "mr-2"/>
                            Álbumes</button>
                    </Link>
                    <Link to = "/recientes">
                        <button className='cursor-pointer mb-3 text-gray-400 block'>
                            <FontAwesomeIcon icon= {faMusic} className = "mr-2"/>
                            Recientes</button>
                    </Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}
