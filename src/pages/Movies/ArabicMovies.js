import React, { lazy, Suspense } from 'react'
const ComponentMovies = lazy(() => import('../../components/ComponentMovies/ComponentMovies'));

const ArabicMovies = () => {
    return (
        <div>        <Suspense fallback={<div>Loading...</div>}>

            <ComponentMovies type={'&with_original_language=ar'} name={'Arabic Movies'} />
        </Suspense>
        </div>
    )
}

export default ArabicMovies
