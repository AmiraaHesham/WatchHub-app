import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer >
                <div className="bg-color5 text-color4 flex justify-center items-center h-[170px] ">
                    <div >
                        <h1 className="text-2xl font-bold ml-24 mb-4">Watch Hub</h1>
                        <h3>Website to watch movies and serise online</h3>

                        <div className="flex gap-5 mt-5 ml-20">
                            <span className="w-[40px] h-[40px]"><FaFacebookSquare className="w-[100%] h-[100%]" /></span>
                            <span className="w-[40px] h-[40px]"><SiInstagram className="w-[100%] h-[100%]" /></span>
                            <span className="w-[40px] h-[40px]"><FaSquareXTwitter className="w-[100%] h-[100%]" />
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
