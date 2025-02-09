import React, { lazy, Suspense } from 'react'
const ComponentMovies = lazy(() => import('../../components/ComponentMovies/ComponentMovies'));

const AllMovies = () => {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>

                <ComponentMovies type={''} name={'Movies'} />
            </Suspense>
        </div>
    )
}

export default AllMovies
