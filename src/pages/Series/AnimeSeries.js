import React, { lazy, Suspense } from 'react'
const ComponentSeries = lazy(() => import('../../components/ComponentSeries/ComponentSeries'));

const AnimeSeries = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>

                <ComponentSeries type={'&with_genres=16'} name={'Anime Series'} />
            </Suspense>

        </div>
    )
}

export default AnimeSeries
