import React, { useState, } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './section.css'
import { Link } from 'react-router-dom';
import { base_url_img } from "../../config";

const Sections = ({ posters, secName }) => {

    return (
        <div className='my-20  ' data-aos="fade-up" >
            <div className=' flex justify-between my-6  text-2xl  text-color4  m-4'>

                <Link to={`/${secName}`}><div>
                    <span>{secName}</span>
                    <span className='text-4xl mt-[-20px]  flex justify-start  text-color3'>ــــــــــ</span>
                </div></Link>

            </div>
            <div className=' mx-4  '>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    navigation={true}
                    className="h-[450px] "
                >

                    {posters.map((poster, index) => {

                        const date = poster.first_air_date || poster.release_date || ''
                        const voteAverage = poster.vote_average
                        const title = poster.title || poster.name
                        const specificDigits = Number(voteAverage.toString().slice(0, 3));

                        const type = poster.hasOwnProperty('title') ? 'movie' : 'tv';
                        const pathDetails = {
                            id: poster.id,
                            type: type
                        };

                        return <SwiperSlide key={index} className=" duration-500 hover:scale-110  pt-5 pb-4  hover:pl-[10px] hover:pr-[10px]  ">
                            <Link to={pathDetails.type === 'tv' ? `/SeriesDetails/${title + '-' + poster.id}` : `/MovieDetails/${title + ' -' + poster.id}`} state={pathDetails}>
                                <span className="absolute bg-green-600 flex items-center justify-center w-9 h-9 m-1 rounded-lg text-gray-200">{specificDigits}</span>

                                {/* <link rel="preload" as="image" href={base_url_img + poster.poster_path} type="image/jpg" /> */}

                                <img src={base_url_img + poster.poster_path} alt='poster' loading="lazy" className='h-[350px] w-[100%] shadow-md shadow-slate-400 rounded-lg ' />
                                <div className="mt-2 ">
                                    <span title={title} className=' text-sm  text-color4 flex justify-center'>{title && title.length <= 20 ? title : title.slice(0, 20) + ' ...'}</span>
                                    <span className='xl:text-lg  text-[#515861] flex justify-center  '>{date.substr(0, 4)}</span>
                                </div>
                            </Link>
                        </SwiperSlide>

                    })}

                </Swiper>
            </div>
        </div >
    )
}

export default Sections
