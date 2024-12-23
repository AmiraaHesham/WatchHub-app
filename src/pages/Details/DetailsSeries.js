import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import DetailsItem from '../../components/ItemDetails/ItemDetails';
import axios from 'axios';

const DetailsSeries = () => {
    const location = useLocation();
    const pathDetails = location.state
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
    const base_url = 'https://api.themoviedb.org/3'

    const [details, setDetails] = useState(({
        img: '',
        title: '',
        overview: '',
        vote_average: '',
        year: '',
        number_of_seasons: '',
        number_of_episodes: '',
        popularity: '',
        genres: [],
        original_title: '',
        origin_country: '',
        original_language: '',
        vote_count: '',
        networks: '',

    }))


    const getDetails = useCallback(async () => {

        try {
            const res = await axios.get(`${base_url}/${pathDetails.type}/${pathDetails.id}?language=en-US`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    }
                }
            )
            console.log(res.data)


            setDetails(() => ({
                img: imgUrl + res.data.poster_path,
                title: res.data.name,
                overview: res.data.overview,
                vote_average: res.data.vote_average,
                year: res.data.first_air_date,
                origin_country: res.data.origin_country,
                number_of_seasons: res.data.number_of_seasons,
                number_of_episodes: res.data.number_of_episodes,
                original_title: res.data.original_name,

                genres: res.data.genres.map((genre) => (
                    <div className='cursor-default my-3 '>
                        <span className='bg-color3 text-color2 shadow-sm shadow-slate-400  text-lg font-sans  py-1 px-2 rounded-sm '>{genre.name}</span>
                    </div>
                )
                ),

                popularity: res.data.popularity,
                original_language: res.data.original_language,
                vote_count: res.data.vote_count,
                networks: imgUrl + res.data.networks[2] || imgUrl + res.data.networks[0],
            }))
        }
        catch (error) {

            console.log(error)
        }

    }, [pathDetails])

    useEffect(() => {
        getDetails()
    }, [getDetails])


    return (
        <div>
            <DetailsItem details={details} itemID={pathDetails.id} itemType={pathDetails.type} />

        </div >
    )
}

export default DetailsSeries
