import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Albums } from './Albums'
import { Artists } from './Artists'
import { MainApp } from './MainApp'
import { ReproductorMusic } from './ReproductorMusic'
import { Sidebar } from './Sidebar'
import { Songs } from './Songs'
import { NavMain } from './ui/NavMain'

export const Home = () => {
  //Obtenemos todo el objeto de la musica seleccionada
  const [songObject, setSongObject] = useState({});

  //nombre de la cancion
  const [song, setSong] = useState("");

  //Canciones recientes
  const [recentSongs, setRecentSongs] = useState([]);

  return (
    <div className='w-10/12 mx-auto'>
        <div className='grid grid-cols-4 h-screen'>
            <Sidebar />
            <div className='col-span-3 bg-zinc-900 p-10'>
              <NavMain  setSong = {setSong} />
              <Routes>
                  <Route exact path = "/" element = {<MainApp  setSongObject = {setSongObject} song = {song} recentSongs = {recentSongs} setRecentSongs = {setRecentSongs} />} />
                  <Route exact path = "/artists" element = {<Artists />} />
                  <Route exact path = "/albums" element = {<Albums />} />
                  <Route exact path = "/recientes" element = {<Songs recentSongs = {recentSongs} setSongObject = {setSongObject}/>} />
              </Routes>
            </div>
            <ReproductorMusic 
              songObject = {songObject}
            />
        </div>
    </div>
  )
}
