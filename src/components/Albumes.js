import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react';
import { useCategoryMusic } from '../hooks/useCategoryMusic';

export const Albumes = () => {
    const { data, loading } = useCategoryMusic("");
    return (
      <div >
          {
            loading ? 
              <div className='h-full flex justify-center items-center'>
                <SpinnerCircularFixed size={100} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
              </div>
            :
            <div className="grid grid-cols-4 gap-4">
              {
                data.map((music) => {
                  return (
                    <div className="bg-gray-900 shadow-lg rounded p-3" key={music.id}>
                    <div className="group relative">
                      <img className="w-full md:w-72 block rounded" src={music.img} alt={music.title} />
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
      </div>
    )
}
