import React, { lazy, Suspense } from 'react'
const ComponentMovies = lazy(() => import('../../components/ComponentMovies/ComponentMovies'));

const AnimeMovies = () => {
    return (
        <div>        <Suspense fallback={<div>Loading...</div>}>

            <ComponentMovies type={'&with_genres=16'} name={'Anime Movies'} />
        </Suspense>
        </div>
    )
}

export default AnimeMovies
