import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url } from "../../config";

const Trailer = ({ type, id }) => {
    const [trailerKey, setTrailerKey] = useState()

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const res = await axios.get(
                    `${base_url}/${type}/${id}/videos`,
                    {
                        headers: {
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThiZDI2NjI3N2IyMzQyMjdlOThlOGExN2I1NTczZiIsIm5iZiI6MTczMjM4OTIwMi43ODkzNzY1LCJzdWIiOiI2NzM2MzBlMmQ0ZmZiYTFlOGIyYWZiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2FGRe8HsRJb9HPD7RdlANa7obtrAz_cCYNxj_bxbSUs'
                            , 'Accept': 'application/json',
                        }
                    }
                );
                const trailer = res.data.results.find((vid) => vid.type === 'Trailer');
                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        };

        fetchTrailer();
    }, [type, id]);
    return (
        <div className='flex justify-center items-center pb-10'>
            <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className=' w-[85%] xl:h-[600px] xs:h-[400px] md:h-[450px] rounded-md '
            ></iframe>
        </div>
    )
}

export default Trailer
