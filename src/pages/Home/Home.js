import { useCallback, useEffect, useState } from "react";
import './home.css'
import Sections from "../../components/SectionsMovie&Series/Sections";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import { Autoplay } from 'swiper/modules';
import { HiTrendingUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
    const base_url = 'https://api.themoviedb.org/3'

    const [trendAll, setTrendAll] = useState([])
    const [Series, setSeries] = useState([])
    const [arabicSeries, setArabicSeries] = useState([])
    const [animeSeries, setAnimeSeries] = useState([])
    const [arabicMovies, setArabicMovies] = useState([])
    const [animeMovies, setAnimeMovies] = useState([])
    const [movies, setMovies] = useState([])


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

    const getDiscoverMovies = useCallback(async () => {
        try {
            const movies = await axios.get(
                `${base_url}/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const arabicMovies = await axios.get(
                `${base_url}/discover/movie?include_adult=false&include_video=true&language=en&page=1&sort_by=popularity.desc&with_original_language=ar`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const animeMovies = await axios.get(
                `${base_url}/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const moviesRes = movies.data.results;
            const arabicMoviesRes = arabicMovies.data.results;
            console.log(moviesRes)
            setMovies(moviesRes);
            setArabicMovies(arabicMoviesRes)
            setAnimeMovies(animeMovies.data.results)


        } catch (error) {
            console.error(error);
        }
    }, []);

    const getDiscoverSeries = useCallback(async () => {
        try {
            const Series = await axios.get(
                `${base_url}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=10764,10763,10767`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            );
            const arabicSeries = await axios.get(
                `${base_url}//discover/tv?include_adult=false&include_null_first_air_dates=false&language=ar&page=1&sort_by=popularity.desc&with_original_language=ar`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            )
            const animeSeries = await axios.get(
                `${base_url}//discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                        , 'Accept': 'application/json',
                    },
                }
            )
            const results = Series.data.results;
            // console.log(results)
            setArabicSeries(arabicSeries.data.results)
            setAnimeSeries(animeSeries.data.results)
            setSeries(results);


        } catch (error) {
            console.error(error);
        }
    }, []);
    useEffect(() => {
        getTrendAll();
        getDiscoverMovies()
        getDiscoverSeries()
    }, [getTrendAll, getDiscoverMovies, getDiscoverSeries]);


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

                        // slidesPerGroup={1}
                        spaceBetween={10}
                        autoPlay={{
                            delay: 500,
                            disableOnInteraction: false,

                        }}
                        autoplay={true}
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
                            const type = trend.hasOwnProperty('title') ? 'movie' : 'tv';

                            const pathDetails = {
                                id: trend.id,
                                type: type
                            };

                            return (<SwiperSlide key={index} className=" duration-500 hover:scale-110 pt-5 pb-3 ">
                                <Link to={pathDetails.type === 'tv' ? `/SeriesDetails/${title + '-' + trend.id}` : `/MovieDetails/${title + ' -' + trend.id}`} state={pathDetails}>
                                    <span className="absolute bg-green-600 flex items-center justify-center w-9 h-9 rounded-lg m-1 text-gray-200">{specificDigits}</span>
                                    <img src={imgUrl + trend.poster_path} alt='' className='h-[330px] w-[100%] shadow-md shadow-slate-400 rounded-lg' />
                                    <div className="mt-2  ">
                                        <span className='text-sm text-color4 flex justify-center'>{title && title.length <= 20 ? title : title.slice(0, 20) + ' ...'}</span>
                                        <span className='xl:text-lg  text-[#515861] flex justify-center '>{date.substr(0, 4)}</span>
                                    </div>
                                </Link>
                            </SwiperSlide>)
                        })}

                    </Swiper>
                </div>

                <Sections secName={'Movies'} poster={movies} />
                <Sections secName={'Arabic Movies'} poster={arabicMovies} />
                <Sections secName={'Anime Movies'} poster={animeMovies} />
                <Sections secName={'Series'} poster={Series} />
                <Sections secName={'Arabic Series'} poster={arabicSeries} />
                <Sections secName={'Anime Series'} poster={animeSeries} />
            </div>



        </div >
    )
}

export default Home
