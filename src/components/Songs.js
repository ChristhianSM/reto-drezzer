import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Songs = ({recentSongs , setSongObject}) => {
  console.log(recentSongs);
  return (
    <>
       {
          recentSongs.length > 0 ? 
            <div className="grid grid-cols-4 gap-4">
              {
                recentSongs.map((music) => {
                  return (
                    <div className="bg-gray-900 shadow-lg rounded p-3" key={music.id}>
                    <div className="group relative">
                      <img className="w-full md:w-72 block rounded" src={music.img} alt="" />
                      <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                        <button 
                          className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                          onClick={ () => {
                            setSongObject(music);
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
          :
            <div className='h-5/6 flex justify-center items-center'>
              No hay nada para mostrar
            </div>
        }
    </>
  )
}
