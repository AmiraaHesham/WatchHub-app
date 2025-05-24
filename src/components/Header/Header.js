import React, { useRef, useState } from 'react'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { FaFilm } from "react-icons/fa6";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../Search/Search';

const Header = () => {
    const btnSearchRef = useRef()
    const [searchInfo, setSearchInfo] = useState('')

    const SearchInfo = async (query) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/keyword?query=${query}&page=1`,

                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMTYwNDcwNi44ODYwMDAyLCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b2iu3fZKxKimYlGs336gpdwow2i0ajLbxuEghrTHBJE'
                        , 'Accept': 'application/json',
                    },

                },
            )
            setSearchInfo(res.data)
            console.log(res.data.results)
        }
        catch {

        }
    }
    return (
        < >
            <div className='div-header'>
                <  div className='div-logo'>
                    <span
                        onClick={() => {
                            let divDashboard = document.querySelector('.div-dashbord')
                            divDashboard.classList.toggle('xs:hidden')
                        }}
                        className='btn-dashboard'

                    ><PiListBold value={'btn-dashboard'} /></span>
                    <Link to={'/'}>  <div>
                        <span className='text-color3 '>Watch  </span>

                        <span >Hub</span>
                    </div>
                    </Link>
                </div>


                <nav className='div-navbar'>
                    <Link to={'/'}> <li>Home</li></Link>

                    <div className='flex justify-center'>
                        <Link to='/Movies'>  <li >Movies</li></Link>

                    </div>


                    <div className='flex justify-center '>
                        <Link to='/Series'>  <li>Series </li></Link>

                    </div>

                </nav>
                <div className=' py-2 flex items-center mr-5 '>
                    <div className='div-new-fav'>

                        <div>
                            <span className='icon-new-fav'><MdOutlineUpdate /></span>
                            <span className='span-new-fav'>New</span>
                        </div>

                        <div>
                            <span className='icon-new-fav '><MdOutlineFavorite /></span>
                            <span className='span-new-fav'>Favorite</span>
                        </div>
                    </div>


                    <input placeholder='Search ...' type='text' onChange={(e) => { SearchInfo(e.target.value) }} className='input-search ' />
                    <button ref={btnSearchRef}
                        onClick={() => {
                            const computedStyle = window.getComputedStyle(btnSearchRef.current)
                            let inputSearchInxs = document.querySelector('#input-search-in-xs')

                            if (computedStyle.backgroundColor === 'rgba(0, 0, 0, 0)') {
                                inputSearchInxs.classList.remove('hidden')

                            }
                        }}
                        className='btn-search  '><FaSearch className='text-color3  text-xl' />


                    </button>
                </div>
            </div>


            <div className='div-dashbord xs:hidden'>
                <div className='sections-dashboard'>
                    <Link to={'/'}>
                        <div className='section '>
                            <span ><IoHome /></span>
                            <span>Home</span>
                        </div>
                    </Link>

                    <Link to='/Movies'>   <div className='section '>
                        <span><FaFilm /></span>
                        <span >Movies</span>
                    </div>
                    </Link>

                    <div >
                        <Link to='/Series'>    <div className='section '>
                            <span><MdOutlineLiveTv /></span>
                            <span >Series</span>
                        </div>
                        </Link>


                    </div>
                </div>
            </div>
            <div id='input-search-in-xs' className='hidden'>
                <div className='div-searchIn-xs '>
                    <input placeholder='Search...' className='w-[100%] text-lg text-color3 outline-none bg-color5  h-8 pl-5 placeholder:text-color4 placeholder:text-sm '></input>
                    <button
                        onClick={() => {
                            let inputSearchInxs = document.querySelector('#input-search-in-xs')
                            inputSearchInxs.classList.add('hidden')
                        }}
                        className='bg-color5 h-8 pr-6'> <IoMdClose className=' text-color3 text-xl ' /></button>
                </div>
            </div>
            {/* <Search searchInfo={searchInfo} /> */}
        </>

    )
}

export default Header
