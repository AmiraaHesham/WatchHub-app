import React, { useCallback, useEffect, useRef, useState } from 'react'
import { base_url, base_url_img } from '../../config'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton'
const ComponentMovies = ({ type, name }) => {

    const [movies, setMovies] = useState([])
    const numPage = useRef(1);

    const fetchMovies = useCallback(async () => {
        try {
            const res = await axios.get(
                `${base_url}/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc${type}`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const moviesRes = res.data.results
            setMovies(moviesRes)

        } catch (error) {
            console.error(error);
        }

    }, [type])

    useEffect(() => {

        fetchMovies()
    }, [fetchMovies])

    const moreMovies = async () => {
        numPage.current += 1
        console.log(numPage.current)
        try {
            const res = await axios.get(
                `${base_url}/discover/movie?include_adult=false&include_video=true&language=en-US&page=${numPage.current}&sort_by=popularity.desc${type}`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const moreMovies = res.data.results
            setMovies((prevMovies) => [...prevMovies, ...moreMovies])
            console.log(moreMovies)

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <h2 className="mx-6 flex font-semibold my-6 xl:text-3xl xs:text-2xl cursor-default gap-3 text-color3">
                {name}
            </h2>
            <hr />
            <div className="flex justify-center items-center my-10">
                <div className="w-[90%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2">
                    {movies.map((movie, index) => {
                        const date = movie.first_air_date || movie.release_date;
                        const voteAverage = movie.vote_average;
                        const title = movie.title || movie.name;
                        const specificDigits = Number(voteAverage.toString().slice(0, 3));
                        const pathDetails = {
                            id: movie.id,
                            type: 'movie',
                        };

                        return (
                            <div className="mx-4 my-3 duration-500 hover:scale-110 " key={index}>
                                <Link
                                    to={`/MovieDetails/${title + '-' + movie.id}`}
                                    state={pathDetails}
                                >
                                    <span className="absolute bg-green-600 flex items-center justify-center w-9 h-9 m-1 rounded-lg text-gray-200">
                                        {specificDigits}
                                    </span>
                                    <link rel="preload" as="image" href={`${base_url_img}${movie.poster_path}`} type="image/jpg" />

                                    <img
                                        src={`${base_url_img}${movie.poster_path}`} alt={''}
                                        className="h-[330px] w-[100%] shadow-md shadow-slate-400 rounded-lg"
                                        loading="lazy"
                                        style={{ aspectRatio: '2/3' }}
                                    />
                                    <div className="mt-2">
                                        <span className="text-sm text-color4 flex justify-center">
                                            {title && title.length <= 20 ? title : title.slice(0, 20) + '...'}
                                        </span>
                                        <span className="text-sm text-[#515861] flex justify-center">
                                            {date.substr(0, 4)}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div
                onClick={moreMovies}
                className='flex justify-center my-7 '>
                <button className='bg-color2 w-[30%] rounded-md text-color4 text-xl font-semibold py-1 shadow-md shadow-slate-500 '>More</button>

            </div>
        </div>
    );
}

export default ComponentMovies
