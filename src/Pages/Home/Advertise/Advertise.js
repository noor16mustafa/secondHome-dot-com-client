import React, { useEffect, useState } from 'react';

const Advertise = () => {
    const [advertise, setAdvertise] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => {
                setAdvertise(data);
            })
    }, [])
    return (
        <div>
            {
                advertise.length >= 0 ? <>
                    <div className=' my-14 mx-auto text-center'>
                        <h2 className="text-4xl font-bold text-success mb-10">Exclusive Offer</h2>
                        <div className="carousel w-1/2 h-96  mx-auto">
                            {
                                advertise.map((ad, i) =>
                                    <div id={i + 1} className="carousel-item relative w-full">
                                        <img src={ad.img} alt='' className="w-full opacity-70" />
                                        <div className="absolute transform -translate-y-1/2 text-center left-10 right-10 top-1/2">
                                            <h2 className="text-4xl font-bold text-black">{ad.title}</h2>
                                            <h2 className="text-3xl font-bold text-red-900">${ad.resale_price}</h2>
                                        </div>
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href={`#${i}`} className="btn btn-circle">❮</a>
                                            <a href={`#${i + 2}`} className="btn btn-circle">❯</a>
                                        </div>


                                    </div>)
                            }
                        </div>
                    </div>
                </>
                    :
                    ''
            }
        </div>


    );
};

export default Advertise;