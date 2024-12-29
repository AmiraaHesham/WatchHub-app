import React, { useState } from 'react'
import { MdOutlineFavorite, MdSlowMotionVideo } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import StarRating from '../StarRating/StarRating';
// import ItemImages from '../ItemImages/ItemImages';
const DetailsItem = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const details = props.details

    return (
        <div >
            <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 m-10   '>
                <div className='xs:flex  xs:items-center  xs:justify-center md:block ' >
                    <div>
                        <div className='w-[300px] h-[370px] rounded-t-lg shadow-lg shadow-slate-400'>

                            <span className=" bg-green-600 flex  absolute items-center justify-center w-9 h-9 m-2 rounded-lg text-gray-200">
                                {details.vote_average.toString().slice(0, 3)}</span>

                            <img src={details.img} alt='' className=' w-[100%] h-[100%] rounded-t-lg ' />
                            <div className='bg-color3 mb-10 h-12 flex items-center justify-center rounded-b-lg shadow-md shadow-slate-400'>
                                <div className='w-16 h-7'>
                                    <img className='w-[100%] h-[100%]' src={details.networks.logo_path} alt={details.networks.name} />
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-5  gap-5  text-lg text-color4 mt-16 '>

                            <button
                                onClick={toggleVisibility}

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
                        <div className=' lg:flex xs:block xs:text-center md:text-start  gap-3 justify-center'>
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


            {/*
                </div>

            </div> */}
            {/* {isVisible && <ItemImages itemID={itemID} itemType={itemType} />} */}


        </div>
    )
}

export default DetailsItem
