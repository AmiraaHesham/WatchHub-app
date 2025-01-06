import React, { useEffect, useState } from 'react'
import { MdOutlineFavorite, MdSlowMotionVideo } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import StarRating from '../StarRating/StarRating';
import axios from 'axios';
import Trailer from '../Trailer/Trailer';
import { IoMdClose } from 'react-icons/io';
import Cast from '../Cast/Cast';
// import ItemImages from '../ItemImages/ItemImages';
const DetailsItem = ({ details, itemID, itemType }) => {

    const [transAR, setTransAR] = useState('')

    const [isVisible, setIsVisible] = useState(false);

    // دالة لتغيير الحالة عند الضغط على الزر
    const toggleVisibility = () => {
        setIsVisible(!isVisible); // عكس القيمة الحالية
    };


    const base_url = 'https://api.themoviedb.org/3'

    const translationArabic = async () => {
        const orignalOverview = document.querySelector('#orignalOverview')
        const transOverview = document.querySelector('#transOverview')

        try {
            const res = await axios.get(`${base_url}/${itemType}/${itemID}/translations`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    }
                }
            )
            orignalOverview.classList.toggle('hidden')
            transOverview.classList.toggle('hidden')
            for (let i = 0; i <= res.data.translations.length; i++) {
                if (res.data.translations[i].name === "العربية") {
                    setTransAR(res.data.translations[i].data.overview)

                    console.log(res.data.translations[i].data.overview)
                }
            }


        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div >
            <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 m-10   '>
                <div className='xs:flex  xs:items-center  xs:justify-center md:block ' >
                    <div>
                        <div className='w-[300px] h-[370px] rounded-t-lg shadow-lg shadow-slate-400'>

                            <span className=" bg-green-600 flex  absolute items-center justify-center w-9 h-9 m-2 rounded-lg text-gray-200">
                                {details.vote_average.toString().slice(0, 3)}</span>

                            <img src={details.img} loading="lazy" alt='' className=' w-[100%] h-[100%] rounded-t-lg ' />
                            <div className='bg-color3 mb-10 h-12 flex items-center justify-center rounded-b-lg shadow-md shadow-slate-400'>

                            </div>
                        </div>
                        <div className='flex ml-5  gap-5  text-lg text-color4 mt-16 '>

                            <button
                                // onClick={toggleVisibility}

                                className=' gap-2 flex items-center shadow-sm shadow-slate-400 bg-color2 hover:bg-color5 py-2 px-3 rounded-md duration-500 hover:scale-105'>
                                <FaRegImages /> Images
                            </button>

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
                    <div className='text-4xl gap-5 lg:flex justify-between items-baseline text-[#e9ecef]  '>
                        <div className='md:hidden xs:flex text-center text-[15px] text-color4 justify-center  '>
                            <div>
                                <StarRating rating={details.vote_average.toString().slice(0, 3)} />
                                <h1>{details.vote_average.toString().slice(0, 3)} From {details.vote_count}</h1>
                            </div>
                        </div>
                        <div className=' lg:flex xs:block xs:text-center items-center md:text-start  gap-3 justify-center'>
                            <h2> {details.title} </h2>
                            <h2 className='text-color4  text-xl'>  ({details.year.slice(0, 4)})  </h2>

                        </div>

                        <div className='text-center text-[15px] text-color4  xs:hidden md:flex'>
                            <div >
                                <StarRating rating={details.vote_average.toString().slice(0, 3)} />


                                <h1>{details.vote_average.toString().slice(0, 3)} From {details.vote_count}</h1>
                            </div>
                        </div>
                    </div>
                    {/* <div className='xs:flex items-center justify-center'>
                        <div> */}
                    <div className='xs:grid-cols-3 text-center md:flex lg:flex md:gap-3 xs:gap-0 xs:mt-5'>
                        {details.genres}
                    </div>
                    <div className='mt-10 flex xs:items-center xs:justify-center md:justify-start  '>
                        <button
                            onClick={toggleVisibility}
                            className='flex shadow-sm shadow-slate-400 duration-700 hover:scale-105 gap-3 items-center bg-color2 py-2 px-4 text-xl text-[#e9ecef]  hover:bg-color5 rounded-md'>
                            <MdSlowMotionVideo className='text-color3 text-4xl' /> Watch Trailer</button>
                    </div>
                    <div className='xs:text-sm md:text-xl my-10 text-[#cccecf]'>
                        <h2>overview</h2>
                        <span id='orignalOverview' className='text-base'>{details.overview}
                            <br></br>
                            <button onClick={translationArabic} className='text-color3 mt-4 text-sm  w-[150px]  '>Translation to Arabic</button>

                        </span>
                        <span id='transOverview' className='text-base hidden'>{transAR}
                            <br></br>
                            <button onClick={translationArabic} className='text-color3 mt-4 text-sm  w-[150px]  '>Orignal Translation</button>
                        </span>

                    </div>

                    <div className='mt-10 grid lg:grid-cols-2 xs:grid-cols-1 mb-10  gap-2 xs:text-sm md:text-xl text-color4'>

                        <span className=' bg-color2 flex items-center gap-3  py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'>Original name:</h4>
                            {details.original_title}</span>

                        <span id='Seasons' className=' bg-color2 flex gap-3 items-center py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'>{details.number_of_seasons !== undefined ? "Seasons:" : "Runtime"}</h4>

                            {details.number_of_seasons || details.runtime + ' minutes'}
                        </span>

                        <span id='Episodes' className='bg-color2 flex gap-3  items-center py-2 px-3 hover:cursor-default duration-500 hover:scale-95 rounded-md mb-2 shadow-md shadow-slate-400'>
                            <h4 className='text-lg text-color3'>{details.number_of_episodes !== undefined ? 'Episodes:' : 'Release date'}</h4>

                            {details.number_of_episodes || details.release_date}</span>

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
            {isVisible && (
                <div>
                    <button
                        onClick={toggleVisibility}
                        className='text-3xl font-semibold text-color3 mx-10'><IoMdClose /></button>
                    <Trailer type={itemType} id={itemID} />
                </div>

            )}

            <Cast type={itemType} id={itemID} />



        </div>
    )
}

export default DetailsItem
