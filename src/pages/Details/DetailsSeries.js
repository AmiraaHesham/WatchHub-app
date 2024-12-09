import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { MdOutlineFavorite, MdSlowMotionVideo } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // مكتبة أيقونات النجوم

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
                networks: res.data.networks[2] || res.data.networks[0],
            }))
        }
        catch (error) {

            console.log(error)
        }

    }, [pathDetails])


    useEffect(() => {
        getDetails()
    }, [getDetails])


    const StarRating = ({ rating, maxRating = (10) }) => {
        // تحويل التقييم إلى مقياس من 5


        const stars = (rating / maxRating) * 5;

        // توليد النجوم الكاملة والنصف والفارغة
        const fullStars = Math.floor(stars);
        const halfStar = stars % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <div style={{ display: "flex", alignItems: "center" }}>

                {Array(fullStars)
                    .fill()
                    .map((_, index) => (
                        <FaStar key={`full-${index}`} style={{ color: "#748ea3", fontSize: "30px" }} />
                    ))}


                {halfStar === 1 && (
                    <FaStarHalfAlt style={{ color: "#748ea3", fontSize: "30px" }} />
                )}


                {Array(emptyStars)
                    .fill()
                    .map((_, index) => (
                        <FaRegStar key={`empty-${index}`} style={{ color: "#748ea3", fontSize: "30px" }} />
                    ))}
            </div>
        );
    };


    return (
        <div className='xs:'>

            <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 m-10   '>
                <div className='xs:flex  xs:items-center  xs:justify-center md:block ' >
                    <div>
                        <div className='w-[300px] h-[370px] rounded-t-lg shadow-lg shadow-slate-400'>

                            <span className=" bg-green-600 flex  absolute items-center justify-center w-9 h-9 m-2 rounded-lg text-gray-200">
                                {details.vote_average.toString().slice(0, 3)}</span>

                            {/* <span className='text-sm py-1 px-1 absolute mt-[434px] ml-[300px] rounded-md  bg-color2   text-color4'>
                                {details.year.slice(0, 4)} </span> */}

                            <img src={details.img} alt='' className=' w-[100%] h-[100%] rounded-t-lg ' />
                            <div className='bg-color3 mb-10 h-12 flex items-center justify-center rounded-b-lg shadow-md shadow-slate-400'>
                                <div className='w-16 h-7'>
                                    <img className='w-[100%] h-[100%]' src={imgUrl + details.networks.logo_path} alt={details.networks.name} />
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-5  gap-5  text-lg text-color4 mt-16 '>

                            <button
                                className=' gap-2 flex items-center shadow-sm shadow-slate-400 bg-color2 hover:bg-color5 py-2 px-3 rounded-md duration-500 hover:scale-105'><FaRegImages /> Images</button>

                            <button
                                onClick={() => {
                                    const addFav = document.querySelector('#add-fav')
                                    const removeFav = document.querySelector('#remove-fav')
                                    addFav.classList.toggle('hidden')
                                    removeFav.classList.toggle('hidden')
                                }}
                                className='gap-2 flex items-center shadow-sm shadow-slate-400 bg-color2 py-2 px-3 rounded-md hover:bg-color5  duration-500 hover:scale-105'>
                                <MdOutlineFavorite id='add-fav' className='hidden' />
                                <MdFavoriteBorder id='remove-fav' />Favoret</button>
                        </div>
                    </div>
                </div>
                <div className='xs:mt-10 md:mt-0 mx-5  xl:col-span-3 lg:col-span-2 md:col-span-1 '>
                    <div className='text-4xl gap-5 flex justify-between items-baseline text-[#e9ecef]  '>
                        <h2 className=' lg:flex items-center  gap-3'>{details.title}
                            <h2 className='text-color4  text-xl'>  ({details.year.slice(0, 4)})  </h2>
                        </h2>

                        <div className='text-center text-[15px] text-color4'>
                            <StarRating rating={details.vote_average.toString().slice(0, 3)} />
                            <h1 className=''>{details.vote_average.toString().slice(0, 3)} From {details.vote_count}</h1>
                        </div>

                    </div>
                    <div className='xs:block lg:flex gap-3 lg:mt-0 xs:mt-6'>
                        {details.genres}
                    </div>
                    <div className='mt-10  '>
                        <button className='flex shadow-sm shadow-slate-400 duration-700 hover:scale-105 gap-3 items-center bg-color2 py-2 px-4 text-xl text-[#e9ecef]  hover:bg-color5 rounded-md'>
                            <MdSlowMotionVideo className='text-color3 text-4xl' /> Watch Trailer</button>
                    </div>
                    <div className='xs:text-sm md:text-xl my-10 text-[#cccecf]'>
                        <h2>overview</h2>
                        <span className='text-base'>{details.overview}</span>
                    </div>
                    <div className='mt-10 grid lg:grid-cols-2 xs:grid-cols-1 mb-10  gap-2 xs:text-sm md:text-xl text-color4'>
                        <span className='bg-color2 flex items-center gap-3  py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'>Original name:</h4>
                            {details.original_title}</span>

                        <span className='bg-color2 flex gap-3 items-center py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'>Seasons:</h4>

                            {details.number_of_seasons} </span>

                        <span className='bg-color2 flex gap-3  items-center py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'>Episodes: </h4>

                            {details.number_of_episodes}</span>

                        <span className='bg-color2 flex gap-3  items-center py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'>Original language:</h4>
                            {details.original_language}</span>

                        <span className='bg-color2 flex gap-3  items-center py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'>   Original  country:</h4>

                            {details.origin_country}</span>
                        <span className='bg-color2  flex gap-3 items-center py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'> Popularity:</h4>
                            {details.popularity}</span>

                    </div>



                </div>

            </div>

        </div >


    )
}

export default DetailsSeries
