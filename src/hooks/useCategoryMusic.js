import { useEffect, useState } from 'react'
import { getArtists } from '../helpers/getMusic';

export const useCategoryMusic = (artist) => {
    console.log(artist);
    const initialState = {
        data: [],
        loading: true,
    }

    const [music, setMusic] = useState(initialState);

    useEffect(() => {
        getArtists(artist)
            .then(elements => {
                setMusic({
                    data: elements,
                    loading: false,
                });
            });
    }, [artist]);

    return music;
}
