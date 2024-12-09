import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './section.css'
import { Link } from 'react-router-dom';

const Sections = (props) => {

    let posters = props.poster
    return (
        <div className='my-20 '>
            <div className=' flex justify-between my-6'>
                <div className=' flex gap-20 text-2xl  text-color4  m-4'>
                    <div>
                        <span>{props.secName}</span>
                        <span className='text-4xl mt-[-20px]  flex justify-start  text-color3'>ــــــــــ</span>
                    </div>

                    <div className='div-mediaList '>
                        <span>New</span>
                        <span>Trending</span>
                        <span>Popular</span>
                    </div>
                </div>

            </div>
            <div className='   mx-4 '>
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
                >

                    {posters.map((poster, index) => {
                        const posterImgUrl = `https://image.tmdb.org/t/p/w500${poster.poster_path}`;
                        const date = poster.first_air_date || poster.release_date
                        const voteAverage = poster.vote_average
                        const title = poster.title || poster.name
                        const specificDigits = Number(voteAverage.toString().slice(0, 3));

                        return <SwiperSlide key={index} className=" duration-700 hover:scale-110 pt-5 pb-4 ">

                            <span className="absolute bg-green-600 flex items-center justify-center w-9 h-9 m-1 rounded-lg text-gray-200">{specificDigits}</span>

                            <img src={posterImgUrl} alt='' className='h-[330px] w-[100%]  shadow-md shadow-slate-400 rounded-lg ' />
                            <div className="mt-2 ">
                                <span className=' text-sm  text-color4 flex justify-center'>{title && title.length <= 20 ? title : title.slice(0, 20) + ' ...'}</span>
                                <span className='text-sm  text-[#515861] flex justify-center '>{date.substr(0, 4)}</span>
                            </div>

                        </SwiperSlide>

                    })}

                </Swiper>
            </div>
        </div>
    )
}

export default Sections
