import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from './Api\'s';
import { useAppContext } from './Contex/ContextApi';
import { useNavigate } from 'react-router-dom';

const ShoesList = () => {

    const [shoes, setShoes] = useState([]);
    const { basket, addItem, deleteItem } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(API_URL)
            .then((res) => {

                setShoes(res.data)
            })
            .catch(err => console.log(err))
    }, [])




    return (
        <div className='pt-44 md:pt-36 pb-12 flex flex-wrap gap-5 justify-center max-w-[90%] mx-auto'>
            {shoes.map((shoe) => (
                shoe.retailPrice !== null && shoe.brand !== "Puma" ? (
                    (
                        <div key={shoe.id} className="border border-lime-400 w-[100%] sm:w-[48%] lg:w-[30%] xl:w-[22%] pt-8 flex flex-col justify-between">
                            <div className="px-5">
                                <img src={shoe.media.thumbUrl} className='px-8 mx-auto' alt="allShoes" />
                                <h2 className='text-2xl font-bold'>{shoe.brand}</h2>
                                <p className='font-medium text-lg my-1'>{shoe.title}</p>
                                <p className='font-medium mb-2 text-xl'>{shoe.retailPrice} $</p>
                            </div>

                            <div className="px-5">
                                <div className="flex items-center justify-between mb-auto">
                                    <button onClick={() => addItem(shoe)} className='shadow-lg w-[45%] shadow-lime-100 text-white font-medium bg-lime-600 py-1 px-4 rounded-xl'>Buy</button>
                                    <span className='text-2xl'>{basket.find(item => item.shoeId === shoe.id)?.amount || 0}</span>
                                    <button onClick={() => deleteItem(shoe)} className='shadow-lg w-[45%] shadow-lime-100 text-white font-medium bg-rose-500 py-1 px-4 rounded-xl'>Sell</button>
                                </div>
                                <button onClick={() => navigate(`/shoes/${shoe.id}`)} className='shadow-lg  mt-5 mb-3 shadow-lime-100 text-white font-medium bg-lime-600  pe-3 ps-1 rounded-xl'>&rarr; See Details</button>

                            </div>


                        </div>
                    )
                ) : null

            ))}
        </div>
    )
}

export default ShoesList