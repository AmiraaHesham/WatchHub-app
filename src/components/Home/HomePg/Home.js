import { useCallback, useEffect, useState } from "react";
import './home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import { Autoplay } from 'swiper/modules';
import { HiTrendingUp } from "react-icons/hi";

const Home = () => {
    const base_url = 'https://api.themoviedb.org/3'

    const [trendAll, setTrendAll] = useState([])



    const getTrendAll = useCallback(async () => {
        try {
            const res = await axios.get(`${base_url}/trending/all/week`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const results = res.data.results;
            console.log(results)
            setTrendAll(results);


        } catch (error) {
            console.error(error);
        }
    }, []);



    useEffect(() => {
        getTrendAll();


    }, [getTrendAll,]);


    return (
        < div >
            <div className="mb-20">
                <div className="mx-6 flex  my-4 xl:text-3xl xs:text-2xl cursor-default gap-3 text-color3">
                    <span ><HiTrendingUp /></span>

                    <span>Trending</span>
                </div>
                <div className='   mx-4'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
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
                        {trendAll.map((trend, index) => {

                            const imgUrl = 'https://image.tmdb.org/t/p/w500';
                            const date = trend.first_air_date || trend.release_date
                            const voteAverage = trend.vote_average
                            const specificDigits = Number(voteAverage.toString().slice(0, 3));
                            const title = trend.name || trend.title


                            return (<SwiperSlide key={index} className=" duration-500 hover:scale-110 pt-5 mx-2">

                                <span className="absolute bg-green-600 flex items-center justify-center w-9 h-9 rounded-lg m-1 text-gray-200">{specificDigits}</span>
                                <img src={imgUrl + trend.poster_path} alt='' className='h-[330px] w-[100%] shadow-md shadow-slate-400 rounded-lg' />
                                <div className="mt-2  ">
                                    <span className='text-sm text-color4 flex justify-center'>{title && title.length <= 20 ? title : title.slice(0, 20) + ' ...'}</span>

                                    <span className='xl:text-lg  text-[#515861] flex justify-center '>{date.substr(0, 4)}</span>
                                </div>
                            </SwiperSlide>)
                        })}

                    </Swiper>
                </div>
            </div>



        </div >
    )
}

export default Home
