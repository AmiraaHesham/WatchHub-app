import React from 'react'
import ComponentMovies from '../../components/ComponentMovies/ComponentMovies';

const ArabicMovies = () => {
    return (
        <div>
            <ComponentMovies type={'&with_original_language=ar'} name={'Movies'} />

        </div>
    )
}

export default ArabicMovies
