import React, { lazy, Suspense } from 'react'
const ComponentSeries = lazy(() => import('../../components/ComponentSeries/ComponentSeries'));

const ArabicSeries = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>

                <ComponentSeries type={'&with_original_language=ar'} name={'Arabic Series'} />
            </Suspense>
        </div>
    )
}

export default ArabicSeries
