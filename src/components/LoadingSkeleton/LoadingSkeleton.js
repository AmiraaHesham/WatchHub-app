import React, { useState } from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false)




    return (

        <div style={{ width: "100%", height: "330px" }}>
            {!loaded && <Skeleton width="100%" height="100%" />}

            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}

                // style={{ display: loaded ? "block" : "none" }}
                className='h-[100%] w-[100%] shadow-md shadow-slate-400 rounded-lg loaded block'
            />

        </div>
    )
}

export default LoadingSkeleton
