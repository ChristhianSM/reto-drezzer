import { useEffect, useState } from 'react'
import { getMusic } from '../helpers/getMusic';

export const useMusic = (querySearch) => { 
    const initialState = {
        data: [],
        loading: true,
    }

    const [music, setMusic] = useState(initialState);

    useEffect(() => {
        getMusic(querySearch)
            .then(elements => {
                setMusic({
                    data: elements,
                    loading: false,
                });
            });
    }, [querySearch]);

    return music;
}
