import React from 'react'
import ComponentMovies from '../../components/ComponentMovies/ComponentMovies';

const AnimeMovies = () => {
    return (
        <div>
            <ComponentMovies type={'&with_genres=16'} name={'Anime Movies'} />

        </div>
    )
}

export default AnimeMovies
