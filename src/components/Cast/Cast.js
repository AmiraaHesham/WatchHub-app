import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { base_url, base_url_img } from "../../config";

const Cast = ({ id, type }) => {
    const [cast, setCast] = useState([])

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const res = await axios.get(
                    `${base_url}/${type}/${id}/credits`,
                    {
                        headers: {
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                            , 'Accept': 'application/json',
                        }
                    }
                );
                console.log(res.data.cast)


                setCast(res.data.cast.slice(0, 16));


            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        };

        fetchCast();
    }, [type, id]);
    return (
        <div className='mb-10 mx-3'>
            <div className="mx-6 flex  my-4 xl:text-3xl xs:text-2xl cursor-default gap-3 text-color4">
                <h2>Cast</h2>
            </div>
            <Swiper

                // slidesPerGroup={1}
                spaceBetween={10}
                // autoPlay={{
                //     delay: 500,
                //     disableOnInteraction: false,

                // }}
                // autoplay={true}
                // loop={true}
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

            >
                {cast.map((cast, index) => {
                    const imgUrl = 'https://image.tmdb.org/t/p/w500';

                    // const date = trend.first_air_date || trend.release_date
                    // const voteAverage = trend.vote_average
                    // const specificDigits = Number(voteAverage.toString().slice(0, 3));
                    // const title = trend.name || trend.title
                    // const type = trend.hasOwnProperty('title') ? 'movie' : 'tv';

                    // const pathDetails = {
                    //     id: trend.id,
                    //     type: type
                    // };

                    return (<SwiperSlide key={index} >
                        <img src={base_url_img + cast.profile_path} loading="lazy" alt='' className='h-[300px] w-[100%] shadow-md shadow-slate-400 rounded-lg' />
                        <div className="mt-2  ">
                            <span className='text-sm text-color4 flex justify-center'>{cast.name}</span>
                            <span className='text-lg  text-[#515861] flex justify-center '>{cast.character}</span>
                        </div>
                    </SwiperSlide>)
                })}

            </Swiper>
        </div>
    )
}

export default Cast
