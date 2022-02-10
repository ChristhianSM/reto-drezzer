import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { SpinnerCircularFixed } from 'spinners-react';
import { useMusic } from '../hooks/useMusic';

export const MainApp = ({setSongObject, song,recentSongs, setRecentSongs}) => {
  const { data, loading } = useMusic(song);

  const handlePlayMusic = (music) => {

    //Agregamos la musica para poder reproducirla
    setSongObject(music);

    //Verificamos si la cancion esta repetida
    const isRepit = recentSongs.some( song => song.id === music.id)
    if (!isRepit) {
      setRecentSongs([
        music,
        ...recentSongs
      ]);
    }
  }
  return (
    < >
        {
          loading ? 
            <div className=' flex justify-center items-center h-5/6'>
              <SpinnerCircularFixed size={100} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
            </div>
          :
          <div className="grid grid-cols-4 gap-4">
            {
              data.map((music) => {
                return (
                  <div className="bg-gray-900 shadow-lg rounded p-3" key={music.id}>
                  <div className="group relative">
                    <img className="w-full md:w-72 block rounded" src={music.img} alt="" />
                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                      <button 
                        className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                        onClick={ () => {
                          handlePlayMusic(music)
                        }}
                      >
                        <FontAwesomeIcon icon= {faPlay} className ="text-2xl text-orange-600 mr-3"/>
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white text-lg">{music.title}</h3>
                    <p className="text-gray-400">{music.artist}</p>
                  </div>
                </div>
                );
              })
            }
          </div>
        }
    </>
  )
}
