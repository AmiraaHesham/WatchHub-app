import React, { lazy, Suspense } from 'react'

const ComponentSeries = lazy(() => import('../../components/ComponentSeries/ComponentSeries'));

const AllSeries = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentSeries type={''} name={'Series'} />
            </Suspense>
        </div>
    )
}

export default AllSeries
