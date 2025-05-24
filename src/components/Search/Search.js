import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { base_url, base_url_img } from '../../config'

const Search = ({ searchInfo }) => {
    return (
        <div>
            <div className="flex justify-center items-center my-10">
                <div className="w-[90%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2">
                    {searchInfo.map((info, index) => {
                        const date = info.first_air_date || info.release_date;
                        const voteAverage = info.vote_average;
                        const title = info.title || info.name;
                        const specificDigits = Number(voteAverage.toString().slice(0, 3));
                        const type = info.hasOwnProperty('title') ? 'movie' : 'tv';

                        const pathDetails = {
                            id: info.id,
                            type: type
                        };

                        return (
                            <div className="mx-4 my-3 duration-500 hover:scale-110 " key={index}>
                                <Link
                                    to={pathDetails.type === 'tv' ? `/SeriesDetails/${title + '-' + info.id}` : `/MovieDetails/${title + ' -' + info.id}`}
                                    state={pathDetails}
                                >
                                    <span className="absolute bg-green-600 flex items-center justify-center w-9 h-9 m-1 rounded-lg text-gray-200">
                                        {specificDigits}
                                    </span>
                                    <link rel="preload" as="image" href={`${base_url_img}${info.poster_path}`} type="image/jpg" />

                                    <img
                                        src={`${base_url_img}${info.poster_path}`} alt={''}
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
        </div>
    )
}

export default Search
