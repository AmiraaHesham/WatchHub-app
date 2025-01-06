import React, { useCallback, useEffect, useRef, useState } from 'react'
import { base_url, base_url_img } from '../../config'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ComponentSeries = ({ type, name }) => {

    const [series, setSeries] = useState([])
    const numPage = useRef(1);

    const fetchSeries = useCallback(async () => {
        try {
            const res = await axios.get(

                `${base_url}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en&page=1&sort_by=popularity.desc${type}`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const seriesRes = res.data.results
            setSeries(seriesRes)

        } catch (error) {
            console.error(error);
        }

    }, [type])

    useEffect(() => {

        fetchSeries()
    }, [fetchSeries])

    const moreSeries = async () => {
        numPage.current += 1
        try {
            const res = await axios.get(

                `${base_url}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en&page=${numPage.current}&sort_by=popularity.desc${type}`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const moreSeries = res.data.results
            setSeries((prevSeries) => [...prevSeries, ...moreSeries])
            console.log(moreSeries)

        }
        catch (error) {
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
                    {series.map((series, index) => {
                        const date = series.first_air_date || series.release_date;
                        const voteAverage = series.vote_average;
                        const title = series.title || series.name;
                        const specificDigits = Number(voteAverage.toString().slice(0, 3));
                        const pathDetails = {
                            id: series.id,
                            type: 'tv',
                        };

                        return (
                            <div className="mx-4 my-3 duration-500 hover:scale-110 " key={index}>
                                <Link
                                    to={`/SeriesDetails/${title + '-' + series.id}`}
                                    state={pathDetails}
                                >
                                    <span className="absolute bg-green-600 flex items-center justify-center w-9 h-9 m-1 rounded-lg text-gray-200">
                                        {specificDigits}
                                    </span>
                                    <img
                                        src={`${base_url_img}${series.poster_path}`}
                                        alt=""
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
                onClick={moreSeries}
                className='flex justify-center my-7 '>
                <button className='bg-color2 w-[30%] rounded-md text-color4 text-xl font-semibold py-1 shadow-md shadow-slate-500 '>More</button>

            </div>
        </div>
    )
}

export default ComponentSeries
