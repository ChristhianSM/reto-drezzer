import React from "react";

export const ReproductorMusic = ({ songObject }) => {
  
  return ( 
    <>
      {
        Object.keys(songObject).length !== 0
        ? 
        <div className="fixed bottom-0 bg-zinc-900 border-t-2 border-t-gray-300 w-10/12">
          <div className=" rounded-tl-xl sm:rounded-t-xl p-2 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-4 flex items-center">
            <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5 w-72">
              <img
                src={songObject.img}
                alt=""
                width="160"
                height="160"
                className="flex-none w-20 h-20 rounded-lg bg-gray-100"
              />
              <div className="min-w-0 flex-auto space-y-0.5">
                <h2 className="text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
                  {songObject.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg font-medium">
                  {songObject.artist}
                </p>
              </div>
            </div>
            <div className="ml-5 w-full">
              <div className="bg-gray-200 dark:bg-black rounded-full overflow-hidden w-full ">
                <audio src={songObject.mp3} autoPlay={true} controls className="w-full"></audio>
              </div>
            </div>
          </div>
        </div>
        : null

      }
    </>
   
  );
};
