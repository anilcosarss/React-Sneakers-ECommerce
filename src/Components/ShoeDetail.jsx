import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SHOES_DETAILS_URL } from './Api\'s';
import { useAppContext } from './Contex/ContextApi';

const ShoeDetail = () => {

  const { id } = useParams();
  const { basket, addItem, deleteItem } = useAppContext();

  const [shoe, setShoe] = useState({ gender: "" });
  useEffect(() => {
    axios.get(`${SHOES_DETAILS_URL}${id}`)
      .then((res) => {
        console.log(res.data)
        console.log(res.data.media.smallImageUrl)

        setShoe(res.data)
      }
      )
      .catch(err => console.log(err))

  }, [id])
  const upperGender = shoe.gender;
  const capitalizedWord = upperGender.charAt(0).toUpperCase() + upperGender.slice(1);



  return (
    <>
      <div className="flex gap-8 justify-center items-center  mx-auto max-w-[1200px] w-screen h-screen">
        <div>
          <img className='max-w-[80%]' src={shoe.media && shoe.media.smallImageUrl ? shoe.media.smallImageUrl : null}  alt="#" />

        </div>
        <div className="flex flex-col">
          <div className="top">
            <div className="text-4xl font-bold ">{shoe.brand} <span>({shoe.year})</span></div>
            <div className="text-2xl font-lg mb-4">{shoe.title}</div>
            <div className="text-xl"><span className='font-bold mr-2'>Color options &rarr;</span>  {shoe.colorway}</div>
            <div className="text-xl"><span className="font-bold">Gender:</span> {upperGender ? capitalizedWord : null}</div>
            <div className="text-2xl font-bold py-4">Price: {shoe.retailPrice} $</div>
          </div>
          <div className="bottom ">
            <div className="flex items-center  gap-4 ">
              <button  onClick={() => addItem(shoe)} className='shadow-lime-100 text-white font-medium bg-lime-600 py-1 px-4 rounded-xl'>Add</button>
              <span className='text-2xl'>{basket.find(item => item.shoeId === shoe.id)?.amount || 0}</span>
              <button  onClick={() => deleteItem(shoe)} className='shadow-lime-100 text-white font-medium bg-rose-500 py-1 px-4 rounded-xl'>Delete</button>
            </div>
          </div>
        </div>


      </div>




    </>


  )
}

export default ShoeDetail