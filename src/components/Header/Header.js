import React, { useRef } from 'react'
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

const Header = () => {
    const btnSearchRef = useRef()
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

                    ><PiListBold /></span>
                    <div>
                        <span className='text-color3 '>Flow  </span>

                        <span >View</span>
                    </div>
                </div>




                <nav className='div-navbar'>
                    <li>Home</li>

                    <div className='flex justify-center'
                        onClick={() => {
                            let menumovie = document.querySelector('#menu-movie')
                            menumovie.classList.toggle('hidden')
                            let menuseries = document.querySelector('#menu-series')
                            menuseries.classList.add('hidden')
                        }}
                    >
                        <li >Movies</li>
                        <div onMouseLeave={() => {
                            let menumovie = document.querySelector('#menu-movie')
                            menumovie.classList.add('hidden')
                        }} id='menu-movie'
                            className='div-menus hidden'>

                            <span >Action</span>
                            <span >Comedy</span>
                            <span>Animation</span>
                            <span>Family</span>
                            <span>History</span>
                            <span>Romance</span>
                        </div>
                    </div>


                    <div className='flex justify-center '
                        onClick={() => {
                            let menuseries = document.querySelector('#menu-series')
                            menuseries.classList.toggle('hidden')
                            let menumovie = document.querySelector('#menu-movie')
                            menumovie.classList.add('hidden')
                        }}
                    >
                        <li>Series </li>
                        <div
                            onMouseLeave={() => {
                                let menuseries = document.querySelector('#menu-series')
                                menuseries.classList.add('hidden')
                            }}
                            id='menu-series'
                            className='hidden div-menus'>
                            <span >Action</span>
                            <span >Comedy</span>
                            <span >Drama</span>
                            <span >Documentary</span>
                            <span >News</span>
                            <span >Kids</span>


                        </div>
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


                    <input placeholder='Search ...' type='text' className='input-search ' />
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
                    <div className='section '>
                        <span ><IoHome /></span>
                        <span>Home</span>
                    </div>


                    <div className='section '>
                        <span><FaFilm /></span>
                        <span >Movies</span>
                    </div>

                    <div className='section-list'>
                        <span >Action</span>
                        <span >Comedy</span>
                        <span>Animation</span>
                        <span>Family</span>
                        <span>History</span>
                        <span>Romance</span>


                    </div>
                    <div>
                        <div className='section '>
                            <span><MdOutlineLiveTv /></span>
                            <span >Series</span>
                        </div>

                        <div className='section-list'>
                            <span >Action</span>
                            <span >Comedy</span>
                            <span >Drama</span>
                            <span >Family</span>
                            <span >Animation</span>
                            <span >Kids</span>



                        </div>
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
        </>

    )
}

export default Header