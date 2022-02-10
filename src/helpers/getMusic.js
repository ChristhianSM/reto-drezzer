
export const getMusic = async (querySearch) => {
    let URL = "";

    if (querySearch.length > 0 ) {
        URL = `https://api.deezer.com/search?q=${querySearch}`
    }else{
        URL = `https://api.deezer.com/search?q=aventura`
    }
    let resp = await fetch(URL);
    const { data } = await resp.json();

    const arrayMusic = data.map(music => {
        return (
            {
                id: music.id,
                title: music.title_short,
                artist: music.artist.name,
                img: music.album.cover_medium,
                img_xs: music.album.cover_small,
                mp3: music.preview,
                album: music.album.title
            }
        );

    });
    return arrayMusic
}

export const getArtists = async (artist) => {
    console.log(artist);
    let URL = "";

    if (artist) {
        URL = `https://api.deezer.com/artist/${artist}`
    }else{
        URL = `https://api.deezer.com/artist/25/related`
    }

    let resp = await fetch(URL);
    const { data } = await resp.json();

    const arrayArtists = data.map(artist => {
        return (
            {
                id: artist.id,
                name: artist.name,
                artist: artist.name,
                img: artist.picture_medium,
            }
        );

    });

    return arrayArtists
}
