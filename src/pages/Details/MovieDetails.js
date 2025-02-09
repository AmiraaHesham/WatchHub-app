import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router';
import DetailsItem from '../../components/ItemDetails/ItemDetails';
import axios from 'axios';
import { base_url, base_url_img } from "../../config";

const MovieDetails = () => {
    useParams()
    const location = useLocation();
    const pathDetails = location.state

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [details, setDetails] = useState(({
        img: '',
        title: '',
        overview: '',
        vote_average: '',
        year: '',
        popularity: '',
        genres: [],
        original_title: '',
        origin_country: '',
        original_language: '',
        vote_count: '',
        runtime: '',
        release_date: ''

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
                img: base_url_img + res.data.poster_path,
                title: res.data.title,
                overview: res.data.overview,
                vote_average: res.data.vote_average,
                year: res.data.release_date,
                origin_country: res.data.origin_country,
                original_title: res.data.original_title,

                genres: res.data.genres.map((genre) => (
                    <div className='cursor-default my-3 '>
                        <span className='bg-color3 text-color2 shadow-sm shadow-slate-400  text-lg font-sans  py-1 px-2 rounded-sm '>
                            {genre.name}</span>
                    </div>
                )
                ),

                popularity: res.data.popularity,
                original_language: res.data.original_language,
                vote_count: res.data.vote_count,
                runtime: res.data.runtime,
                release_date: res.data.release_date
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
            <DetailsItem details={details} itemType={pathDetails.type} itemID={pathDetails.id} />
        </div>
    )
}

export default MovieDetails
